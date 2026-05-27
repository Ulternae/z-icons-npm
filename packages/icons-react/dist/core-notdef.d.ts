import React from 'react';

export interface CoreNotdefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreNotdef: React.FC<CoreNotdefProps>;
export default CoreNotdef;
