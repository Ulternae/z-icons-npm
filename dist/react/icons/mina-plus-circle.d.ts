import React from 'react';

export interface MinaPlusCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusCircle: React.FC<MinaPlusCircleProps>;
export default MinaPlusCircle;
