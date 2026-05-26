import React from 'react';

export interface LanShowerAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShowerAlt: React.FC<LanShowerAltProps>;
export default LanShowerAlt;
