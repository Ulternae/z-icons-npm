import React from 'react';

export interface CoreHeartHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHeartHalf: React.FC<CoreHeartHalfProps>;
export default CoreHeartHalf;
