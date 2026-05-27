import React from 'react';

export interface NeoMartiniGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMartiniGlassSolid: React.FC<NeoMartiniGlassSolidProps>;
export default NeoMartiniGlassSolid;
