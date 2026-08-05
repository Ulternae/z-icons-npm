import React from 'react';

export interface MinaBrightnessHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrightnessHigh(props: MinaBrightnessHighProps): React.ReactElement;
export default MinaBrightnessHigh;
