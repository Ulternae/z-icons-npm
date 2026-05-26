import React from 'react';

export interface LanApertureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAperture: React.FC<LanApertureProps>;
export default LanAperture;
