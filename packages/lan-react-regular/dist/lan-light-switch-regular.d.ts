import React from 'react';

export interface LanLightSwitchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightSwitchRegular(props: LanLightSwitchRegularProps): React.ReactElement;
export default LanLightSwitchRegular;
