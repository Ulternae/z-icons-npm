import React from 'react';

export interface LanLightSwitchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightSwitch(props: LanLightSwitchProps): React.ReactElement;
export default LanLightSwitch;
