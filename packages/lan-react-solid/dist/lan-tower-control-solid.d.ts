import React from 'react';

export interface LanTowerControlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerControlSolid(props: LanTowerControlSolidProps): React.ReactElement;
export default LanTowerControlSolid;
