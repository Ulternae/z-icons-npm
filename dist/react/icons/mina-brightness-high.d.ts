import React from 'react';

export interface MinaBrightnessHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrightnessHigh: React.FC<MinaBrightnessHighProps>;
export default MinaBrightnessHigh;
