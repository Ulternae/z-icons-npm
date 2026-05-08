import React from 'react';

export interface MinaApertureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAperture: React.FC<MinaApertureProps>;
export default MinaAperture;
