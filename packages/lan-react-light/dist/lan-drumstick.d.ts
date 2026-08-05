import React from 'react';

export interface LanDrumstickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumstick(props: LanDrumstickProps): React.ReactElement;
export default LanDrumstick;
