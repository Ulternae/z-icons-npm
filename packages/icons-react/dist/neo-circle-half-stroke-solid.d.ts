import React from 'react';

export interface NeoCircleHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleHalfStrokeSolid: React.FC<NeoCircleHalfStrokeSolidProps>;
export default NeoCircleHalfStrokeSolid;
