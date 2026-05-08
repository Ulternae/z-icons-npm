import React from 'react';

export interface MinaCircleHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCircleHalf: React.FC<MinaCircleHalfProps>;
export default MinaCircleHalf;
