import React from 'react';

export interface MinaContactlessCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaContactlessCircle: React.FC<MinaContactlessCircleProps>;
export default MinaContactlessCircle;
