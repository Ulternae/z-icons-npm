import React from 'react';

export interface CoreUnderlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUnderline: React.FC<CoreUnderlineProps>;
export default CoreUnderline;
