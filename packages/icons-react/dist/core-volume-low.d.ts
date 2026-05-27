import React from 'react';

export interface CoreVolumeLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeLow: React.FC<CoreVolumeLowProps>;
export default CoreVolumeLow;
