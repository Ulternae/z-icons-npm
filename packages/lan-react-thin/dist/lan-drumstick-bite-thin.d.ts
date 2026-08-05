import React from 'react';

export interface LanDrumstickBiteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumstickBiteThin(props: LanDrumstickBiteThinProps): React.ReactElement;
export default LanDrumstickBiteThin;
