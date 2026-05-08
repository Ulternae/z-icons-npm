import React from 'react';

export interface MinaLocationMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationMinusSolid: React.FC<MinaLocationMinusSolidProps>;
export default MinaLocationMinusSolid;
