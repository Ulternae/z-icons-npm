import React from 'react';

export interface MinaMountainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMountainSolid: React.FC<MinaMountainSolidProps>;
export default MinaMountainSolid;
