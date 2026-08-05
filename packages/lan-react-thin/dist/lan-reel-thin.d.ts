import React from 'react';

export interface LanReelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanReelThin(props: LanReelThinProps): React.ReactElement;
export default LanReelThin;
