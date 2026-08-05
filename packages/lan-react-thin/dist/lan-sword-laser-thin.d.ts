import React from 'react';

export interface LanSwordLaserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordLaserThin(props: LanSwordLaserThinProps): React.ReactElement;
export default LanSwordLaserThin;
