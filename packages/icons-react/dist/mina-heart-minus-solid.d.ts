import React from 'react';

export interface MinaHeartMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartMinusSolid: React.FC<MinaHeartMinusSolidProps>;
export default MinaHeartMinusSolid;
