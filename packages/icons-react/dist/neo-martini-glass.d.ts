import React from 'react';

export interface NeoMartiniGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMartiniGlass: React.FC<NeoMartiniGlassProps>;
export default NeoMartiniGlass;
