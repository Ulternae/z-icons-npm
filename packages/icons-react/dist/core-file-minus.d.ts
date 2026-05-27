import React from 'react';

export interface CoreFileMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFileMinus: React.FC<CoreFileMinusProps>;
export default CoreFileMinus;
