import React from 'react';

export interface LanAppleAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleAlt: React.FC<LanAppleAltProps>;
export default LanAppleAlt;
