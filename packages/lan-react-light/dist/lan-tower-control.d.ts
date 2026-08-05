import React from 'react';

export interface LanTowerControlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerControl(props: LanTowerControlProps): React.ReactElement;
export default LanTowerControl;
