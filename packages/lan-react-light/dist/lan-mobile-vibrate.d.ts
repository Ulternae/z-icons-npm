import React from 'react';

export interface LanMobileVibrateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileVibrate(props: LanMobileVibrateProps): React.ReactElement;
export default LanMobileVibrate;
