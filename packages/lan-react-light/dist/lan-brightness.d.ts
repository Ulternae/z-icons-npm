import React from 'react';

export interface LanBrightnessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrightness(props: LanBrightnessProps): React.ReactElement;
export default LanBrightness;
