export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const prompt = url.searchParams.get('prompt') || 'cyberpunk cat'; // Default prompt if none is provided

    const inputs = { prompt };

    // Generate the image using the AI service
    const response = await env.AI.run(
      '@cf/stabilityai/stable-diffusion-xl-base-1.0',
      inputs
    );

    // Return the response with headers to display the image inline
    return new Response(response, {
      headers: {
        'content-type': 'image/png',
        'content-disposition': 'inline', // Ensures the image displays in the browser
      },
    });
  },
};
