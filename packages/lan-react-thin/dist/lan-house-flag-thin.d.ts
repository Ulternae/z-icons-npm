import React from 'react';

export interface LanHouseFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFlagThin(props: LanHouseFlagThinProps): React.ReactElement;
export default LanHouseFlagThin;
