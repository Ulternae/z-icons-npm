import React from 'react';

export interface MinaCheckCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckCircle: React.FC<MinaCheckCircleProps>;
export default MinaCheckCircle;
