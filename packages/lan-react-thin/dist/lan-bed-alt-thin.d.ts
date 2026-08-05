import React from 'react';

export interface LanBedAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBedAltThin(props: LanBedAltThinProps): React.ReactElement;
export default LanBedAltThin;
