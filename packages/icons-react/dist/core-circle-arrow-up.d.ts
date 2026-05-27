import React from 'react';

export interface CoreCircleArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleArrowUp: React.FC<CoreCircleArrowUpProps>;
export default CoreCircleArrowUp;
