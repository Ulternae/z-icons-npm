import React from 'react';

export interface LanBrightnessLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrightnessLow(props: LanBrightnessLowProps): React.ReactElement;
export default LanBrightnessLow;
