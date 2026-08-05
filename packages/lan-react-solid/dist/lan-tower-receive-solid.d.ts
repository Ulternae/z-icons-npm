import React from 'react';

export interface LanTowerReceiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerReceiveSolid(props: LanTowerReceiveSolidProps): React.ReactElement;
export default LanTowerReceiveSolid;
