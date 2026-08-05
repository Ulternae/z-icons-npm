import React from 'react';

export interface LanLightSwitchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightSwitchSolid(props: LanLightSwitchSolidProps): React.ReactElement;
export default LanLightSwitchSolid;
