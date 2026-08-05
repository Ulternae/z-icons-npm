import React from 'react';

export interface LanCrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrowThin(props: LanCrowThinProps): React.ReactElement;
export default LanCrowThin;
