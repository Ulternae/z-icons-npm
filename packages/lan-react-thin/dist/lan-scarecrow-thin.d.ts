import React from 'react';

export interface LanScarecrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScarecrowThin(props: LanScarecrowThinProps): React.ReactElement;
export default LanScarecrowThin;
