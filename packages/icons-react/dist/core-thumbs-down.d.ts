import React from 'react';

export interface CoreThumbsDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreThumbsDown: React.FC<CoreThumbsDownProps>;
export default CoreThumbsDown;
