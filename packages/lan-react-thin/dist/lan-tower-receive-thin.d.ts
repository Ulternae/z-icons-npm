import React from 'react';

export interface LanTowerReceiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerReceiveThin(props: LanTowerReceiveThinProps): React.ReactElement;
export default LanTowerReceiveThin;
