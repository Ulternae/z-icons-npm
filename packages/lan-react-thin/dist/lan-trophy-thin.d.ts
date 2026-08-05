import React from 'react';

export interface LanTrophyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrophyThin(props: LanTrophyThinProps): React.ReactElement;
export default LanTrophyThin;
