import React from 'react';

export interface LanVrCardboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVrCardboardThin: React.FC<LanVrCardboardThinProps>;
export default LanVrCardboardThin;
