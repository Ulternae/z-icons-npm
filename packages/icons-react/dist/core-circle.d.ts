import React from 'react';

export interface CoreCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircle: React.FC<CoreCircleProps>;
export default CoreCircle;
