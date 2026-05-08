import React from 'react';

export interface MinaCheckCircleOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckCircleOne: React.FC<MinaCheckCircleOneProps>;
export default MinaCheckCircleOne;
