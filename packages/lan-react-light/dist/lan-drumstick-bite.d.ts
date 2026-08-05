import React from 'react';

export interface LanDrumstickBiteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumstickBite(props: LanDrumstickBiteProps): React.ReactElement;
export default LanDrumstickBite;
