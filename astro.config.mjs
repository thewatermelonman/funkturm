// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from "@astrojs/react";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  fonts: [{
      provider: fontProviders.local(),
      name: "Nulshock",
      cssVariable: "--font-nulshock",
      options: {
          variants: [{
              src: ['./src/assets/fonts/Nulshock Bd.otf'],
              weight: 'normal',
              style: 'normal'
          }]
      }
	}],

  adapter: cloudflare(),
});