import React from 'react';

export interface CoreArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowRight: React.FC<CoreArrowRightProps>;
export default CoreArrowRight;
