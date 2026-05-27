import React from 'react';

export interface NeoCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleInfoSolid: React.FC<NeoCircleInfoSolidProps>;
export default NeoCircleInfoSolid;
