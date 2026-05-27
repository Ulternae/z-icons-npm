import React from 'react';

export interface CoreFillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFill: React.FC<CoreFillProps>;
export default CoreFill;
