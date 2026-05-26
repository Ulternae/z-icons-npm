import React from 'react';

export interface LanToriiGateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToriiGate: React.FC<LanToriiGateProps>;
export default LanToriiGate;
