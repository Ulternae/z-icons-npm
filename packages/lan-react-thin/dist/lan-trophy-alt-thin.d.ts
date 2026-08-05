import React from 'react';

export interface LanTrophyAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrophyAltThin(props: LanTrophyAltThinProps): React.ReactElement;
export default LanTrophyAltThin;
