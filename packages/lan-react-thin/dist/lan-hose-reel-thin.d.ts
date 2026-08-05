import React from 'react';

export interface LanHoseReelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoseReelThin(props: LanHoseReelThinProps): React.ReactElement;
export default LanHoseReelThin;
