import React from 'react';

export interface CoreCircleArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleArrowRight: React.FC<CoreCircleArrowRightProps>;
export default CoreCircleArrowRight;
