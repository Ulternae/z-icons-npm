import React from 'react';

export interface CoreMugHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMugHot: React.FC<CoreMugHotProps>;
export default CoreMugHot;
