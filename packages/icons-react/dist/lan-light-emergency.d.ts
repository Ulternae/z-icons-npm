import React from 'react';

export interface LanLightEmergencyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightEmergency: React.FC<LanLightEmergencyProps>;
export default LanLightEmergency;
