import React from 'react';

export interface NeoCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleCheckSolid: React.FC<NeoCircleCheckSolidProps>;
export default NeoCircleCheckSolid;
