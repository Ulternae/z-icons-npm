import React from 'react';

export interface LanHandshakeAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandshakeAlt: React.FC<LanHandshakeAltProps>;
export default LanHandshakeAlt;
