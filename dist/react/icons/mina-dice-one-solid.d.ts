import React from 'react';

export interface MinaDiceOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDiceOneSolid: React.FC<MinaDiceOneSolidProps>;
export default MinaDiceOneSolid;
