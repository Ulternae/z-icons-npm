import React from 'react';

export interface LanDrumSteelpanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumSteelpanThin(props: LanDrumSteelpanThinProps): React.ReactElement;
export default LanDrumSteelpanThin;
