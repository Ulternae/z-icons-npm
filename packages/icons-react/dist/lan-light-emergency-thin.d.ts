import React from 'react';

export interface LanLightEmergencyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightEmergencyThin: React.FC<LanLightEmergencyThinProps>;
export default LanLightEmergencyThin;
