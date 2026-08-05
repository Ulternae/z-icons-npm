import React from 'react';

export interface LanMedalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMedalThin(props: LanMedalThinProps): React.ReactElement;
export default LanMedalThin;
