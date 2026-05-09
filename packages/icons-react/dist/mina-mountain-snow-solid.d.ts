import React from 'react';

export interface MinaMountainSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMountainSnowSolid: React.FC<MinaMountainSnowSolidProps>;
export default MinaMountainSnowSolid;
