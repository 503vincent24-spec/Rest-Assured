#!/usr/bin/env python3
"""Generate the scan-to-text QR codes used on print materials.

Each printed piece gets its own QR code whose pre-written text names the
piece ("Got your card…"), so every text message shows which
piece brought the lead in.

    pip install segno
    python3 tools/make-qr.py
"""
import os
import segno

PHONE = '+19713020120'
CODES = {
    'qr-text-us.svg':         "Hi Shawn! I'd like a free moving quote.",
    # Kept short on purpose: shorter text = fewer, larger QR squares = easier scanning
    'qr-text-card.svg':       "Hi Shawn! Got your card. I'd like a moving quote.",
    'qr-text-laundromat.svg': "Hi Shawn! Saw your laundromat flyer. I'd like a quote.",
    'qr-text-apartments.svg': "Hi Shawn! Saw your apartment flyer. I'd like a quote.",
}

out_dir = os.path.join(os.path.dirname(__file__), '..', 'assets')
for name, message in CODES.items():
    qr = segno.make(f'SMSTO:{PHONE}:{message}', error='m', boost_error=False)
    path = os.path.join(out_dir, name)
    qr.save(path, border=4, dark='#0F2547', light='#FFFFFF', xmldecl=False, svgns=True, nl=False)
    n = qr.symbol_size(border=4)[0]
    svg = open(path).read()
    svg = svg.replace(f'width="{n}" height="{n}" class="segno"',
                      f'viewBox="0 0 {n} {n}" shape-rendering="crispEdges" role="img" '
                      f'aria-label="QR code: text Rest Assured Moving at (971) 302-0120"', 1)
    open(path, 'w').write(svg)
    print(f'assets/{name}  version {qr.version}  "{message}"')
