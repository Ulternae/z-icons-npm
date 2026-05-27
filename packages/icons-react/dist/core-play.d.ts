import React from 'react';

export interface CorePlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlay: React.FC<CorePlayProps>;
export default CorePlay;
