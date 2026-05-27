import React from 'react';

export interface NeoItalicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoItalicSolid: React.FC<NeoItalicSolidProps>;
export default NeoItalicSolid;
