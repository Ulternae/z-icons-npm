import React from 'react';

export interface MinaDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsSolid: React.FC<MinaDotsSolidProps>;
export default MinaDotsSolid;
