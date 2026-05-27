import React from 'react';

export interface CoreApertureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAperture: React.FC<CoreApertureProps>;
export default CoreAperture;
