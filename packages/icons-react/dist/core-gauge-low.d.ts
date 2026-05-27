import React from 'react';

export interface CoreGaugeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGaugeLow: React.FC<CoreGaugeLowProps>;
export default CoreGaugeLow;
