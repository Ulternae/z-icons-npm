import React from 'react';

export interface CoreBackwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBackward: React.FC<CoreBackwardProps>;
export default CoreBackward;
