export const config = { runtime: 'edge' };

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

export default async function handler(req: Request) {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders, status: 204 });

  const models = [
    { id: "gpt-5.4", object: "model", owned_by: "openai" },
    { id: "gpt-5.4-mini", object: "model", owned_by: "openai" },
    { id: "gpt-5.4-nano", object: "model", owned_by: "openai" },
    { id: "gpt-5.2", object: "model", owned_by: "openai" },
    { id: "gpt-5", object: "model", owned_by: "openai" },
    { id: "gpt-4.1", object: "model", owned_by: "openai" },
    { id: "gpt-4o", object: "model", owned_by: "openai" },
    { id: "claude-sonnet-4-6", object: "model", owned_by: "anthropic" },
    { id: "claude-haiku-4-5", object: "model", owned_by: "anthropic" },
    { id: "claude-opus-4-7", object: "model", owned_by: "anthropic" }
  ];

  return new Response(JSON.stringify({ object: "list", data: models }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
