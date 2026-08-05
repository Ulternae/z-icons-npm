import React from 'react';

export interface LanTowerReceiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerReceive(props: LanTowerReceiveProps): React.ReactElement;
export default LanTowerReceive;
