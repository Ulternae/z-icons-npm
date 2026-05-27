import React from 'react';

export interface NeoFontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFont: React.FC<NeoFontProps>;
export default NeoFont;
