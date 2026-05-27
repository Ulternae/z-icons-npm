import React from 'react';

export interface CoreCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleCheck: React.FC<CoreCircleCheckProps>;
export default CoreCircleCheck;
