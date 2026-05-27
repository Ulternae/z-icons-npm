import React from 'react';

export interface CoreArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreArrowUp: React.FC<CoreArrowUpProps>;
export default CoreArrowUp;
