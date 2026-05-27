import React from 'react';

export interface NeoFontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFontSolid: React.FC<NeoFontSolidProps>;
export default NeoFontSolid;
