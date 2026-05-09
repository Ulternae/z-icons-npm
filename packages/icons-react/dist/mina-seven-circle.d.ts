import React from 'react';

export interface MinaSevenCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenCircle: React.FC<MinaSevenCircleProps>;
export default MinaSevenCircle;
