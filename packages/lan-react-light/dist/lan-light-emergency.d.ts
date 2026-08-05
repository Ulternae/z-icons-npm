import React from 'react';

export interface LanLightEmergencyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightEmergency(props: LanLightEmergencyProps): React.ReactElement;
export default LanLightEmergency;
