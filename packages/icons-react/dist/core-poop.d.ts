import React from 'react';

export interface CorePoopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePoop: React.FC<CorePoopProps>;
export default CorePoop;
