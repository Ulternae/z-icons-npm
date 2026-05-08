import React from 'react';

export interface MinaHeartCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartCircle: React.FC<MinaHeartCircleProps>;
export default MinaHeartCircle;
