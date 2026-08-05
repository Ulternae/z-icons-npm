import React from 'react';

export interface LanLightEmergencyOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightEmergencyOn(props: LanLightEmergencyOnProps): React.ReactElement;
export default LanLightEmergencyOn;
