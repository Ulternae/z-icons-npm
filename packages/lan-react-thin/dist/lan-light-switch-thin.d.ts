import React from 'react';

export interface LanLightSwitchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightSwitchThin(props: LanLightSwitchThinProps): React.ReactElement;
export default LanLightSwitchThin;
