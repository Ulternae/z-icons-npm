import React from 'react';

export interface LanToriiGateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToriiGateThin: React.FC<LanToriiGateThinProps>;
export default LanToriiGateThin;
