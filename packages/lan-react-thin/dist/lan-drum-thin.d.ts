import React from 'react';

export interface LanDrumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumThin(props: LanDrumThinProps): React.ReactElement;
export default LanDrumThin;
