import React from 'react';

export interface LanSwordLaserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordLaser(props: LanSwordLaserProps): React.ReactElement;
export default LanSwordLaser;
