import React from 'react';

export interface LanTowerControlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerControlThin(props: LanTowerControlThinProps): React.ReactElement;
export default LanTowerControlThin;
