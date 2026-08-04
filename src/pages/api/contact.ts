import type { APIRoute } from "astro";

// This route runs on Cloudflare Workers (server-rendered, not prerendered).
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return new Response("Missing required fields.", { status: 400 });
  }

  // TODO before launch: wire this up to an actual email delivery service
  // (e.g. Resend, Postmark, or Cloudflare Email Routing) using an API key
  // stored as a Cloudflare Worker secret. Right now, submissions are
  // accepted but not yet forwarded anywhere.
  console.log("Contact form submission:", { name, email, message });

  return new Response(null, {
    status: 302,
    headers: { Location: "/visit?sent=1" },
  });
};
