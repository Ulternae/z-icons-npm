import React from 'react';

export interface LanLightSwitchOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightSwitchOn(props: LanLightSwitchOnProps): React.ReactElement;
export default LanLightSwitchOn;
