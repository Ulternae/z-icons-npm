import React from 'react';

export interface MinaIndifferentCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIndifferentCircle: React.FC<MinaIndifferentCircleProps>;
export default MinaIndifferentCircle;
