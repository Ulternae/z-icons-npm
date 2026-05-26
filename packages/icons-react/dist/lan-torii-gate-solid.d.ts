import React from 'react';

export interface LanToriiGateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToriiGateSolid: React.FC<LanToriiGateSolidProps>;
export default LanToriiGateSolid;
