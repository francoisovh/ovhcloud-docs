import type { CpNavKey } from '../types';

// Ordering a DNS zone for a domain that does not have one yet. This is an order flow, not a
// product screen: it starts from the universe's Order button, so there is no route and no
// nav node — the two labels are Manager i18n (sidebar_menu_order_actions and
// server_sidebar_order_item_zone_title). For an existing zone, see `web-domain-dns-zone`
// (through the domain) or `web-dns-zones` (the DNS zones entry).
export const webDnsZoneOrder: CpNavKey = {
  universe: 'web-cloud',
  locations: [
    {
      source: {
        labels: [
          'sidebar_menu_order_actions',
          'server_sidebar_order_item_zone_title',
        ],
      },
      text: {
        en: { crumbs: ['Order', 'DNS zone'] },
        fr: { crumbs: ['Commander', 'Zone DNS'] },
        de: { crumbs: ['Bestellen', 'DNS-Zone'] },
        es: { crumbs: ['Contratar', 'Zona DNS'] },
        it: { crumbs: ['Ordina', 'Zona DNS'] },
        pl: { crumbs: ['Zamów', 'Strefa DNS'] },
        pt: { crumbs: ['Encomendar', 'Zona DNS'] },
      },
    },
  ],
};
