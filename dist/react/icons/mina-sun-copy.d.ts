import React from 'react';

export interface MinaSunCopyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunCopy: React.FC<MinaSunCopyProps>;
export default MinaSunCopy;
