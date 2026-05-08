import React from 'react';

export interface MinaSproutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSproutSolid: React.FC<MinaSproutSolidProps>;
export default MinaSproutSolid;
