import React from 'react';

export interface LanDrumstickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumstickThin(props: LanDrumstickThinProps): React.ReactElement;
export default LanDrumstickThin;
