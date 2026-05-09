import React from 'react';

export interface MinaBrightnessLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrightnessLow: React.FC<MinaBrightnessLowProps>;
export default MinaBrightnessLow;
