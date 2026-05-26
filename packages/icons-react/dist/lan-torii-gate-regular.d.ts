import React from 'react';

export interface LanToriiGateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToriiGateRegular: React.FC<LanToriiGateRegularProps>;
export default LanToriiGateRegular;
