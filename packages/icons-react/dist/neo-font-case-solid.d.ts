import React from 'react';

export interface NeoFontCaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFontCaseSolid: React.FC<NeoFontCaseSolidProps>;
export default NeoFontCaseSolid;
