import React from 'react';

export interface LanLightEmergencyOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLightEmergencyOn: React.FC<LanLightEmergencyOnProps>;
export default LanLightEmergencyOn;
