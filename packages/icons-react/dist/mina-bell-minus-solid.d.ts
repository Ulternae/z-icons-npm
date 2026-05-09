import React from 'react';

export interface MinaBellMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellMinusSolid: React.FC<MinaBellMinusSolidProps>;
export default MinaBellMinusSolid;
