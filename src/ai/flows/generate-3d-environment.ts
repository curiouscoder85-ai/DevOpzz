'use server';
/**
 * @fileOverview A flow for generating 3D environments and components based on user specifications.
 *
 * - generate3DEnvironment - A function that generates personalized 3D visuals based on user input.
 * - Generate3DEnvironmentInput - The input type for the generate3DEnvironment function.
 * - Generate3DEnvironmentOutput - The return type for the generate3DEnvironment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const Generate3DEnvironmentInputSchema = z.object({
  style: z
    .string()
    .describe('The desired style of the 3D environment (e.g., futuristic, minimalist).'),
  complexity:
    z.string().describe('The desired complexity of the 3D environment (e.g., high, low, detailed).'),
  elements: z
    .string()
    .describe('Specific elements to include in the 3D environment (e.g., glowing code blocks, floating frames).'),
});
export type Generate3DEnvironmentInput = z.infer<typeof Generate3DEnvironmentInputSchema>;

const Generate3DEnvironmentOutputSchema = z.object({
  environmentScript: z
    .string()
    .describe(
      'A string of JavaScript code that uses Three.js to create a 3D scene. The script should be a function that accepts a `scene` object and adds objects to it.'
    ),
});
export type Generate3DEnvironmentOutput = z.infer<typeof Generate3DEnvironmentOutputSchema>;

export async function generate3DEnvironment(
  input: Generate3DEnvironmentInput
): Promise<Generate3DEnvironmentOutput> {
  return generate3DEnvironmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generate3DEnvironmentPrompt',
  input: {schema: Generate3DEnvironmentInputSchema},
  output: {schema: Generate3DEnvironmentOutputSchema},
  prompt: `You are a 3D environment generation expert specializing in Three.js. Based on the user's preferences for style, complexity, and elements, generate a JavaScript function body that populates a Three.js scene.

  The function you generate will be executed in an environment where a THREE.Scene object named 'scene' is available. You should not create the scene or renderer. Your script should only add objects to the existing 'scene'.

  Do not include the function definition, just the body of the function. For example:
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  User Preferences:
  - Style: {{{style}}}
  - Complexity: {{{complexity}}}
  - Elements: {{{elements}}}

  Return only the JavaScript code for the scene.
  `,
});

const generate3DEnvironmentFlow = ai.defineFlow(
  {
    name: 'generate3DEnvironmentFlow',
    inputSchema: Generate3DEnvironmentInputSchema,
    outputSchema: Generate3DEnvironmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
