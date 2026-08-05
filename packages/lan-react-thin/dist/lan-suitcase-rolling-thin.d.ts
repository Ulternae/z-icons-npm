import React from 'react';

export interface LanSuitcaseRollingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcaseRollingThin(props: LanSuitcaseRollingThinProps): React.ReactElement;
export default LanSuitcaseRollingThin;
