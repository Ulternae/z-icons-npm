import React from 'react';

export interface LanHandshakeAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandshakeAltThin: React.FC<LanHandshakeAltThinProps>;
export default LanHandshakeAltThin;
