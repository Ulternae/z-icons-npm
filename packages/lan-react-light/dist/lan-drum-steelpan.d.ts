import React from 'react';

export interface LanDrumSteelpanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumSteelpan(props: LanDrumSteelpanProps): React.ReactElement;
export default LanDrumSteelpan;
