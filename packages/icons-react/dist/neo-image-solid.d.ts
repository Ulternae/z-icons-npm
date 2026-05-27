import React from 'react';

export interface NeoImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoImageSolid: React.FC<NeoImageSolidProps>;
export default NeoImageSolid;
