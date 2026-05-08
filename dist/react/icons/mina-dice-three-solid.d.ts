import React from 'react';

export interface MinaDiceThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceThreeSolid: React.FC<MinaDiceThreeSolidProps>;
export default MinaDiceThreeSolid;
