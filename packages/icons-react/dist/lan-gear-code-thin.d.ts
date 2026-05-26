import React from 'react';

export interface LanGearCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearCodeThin: React.FC<LanGearCodeThinProps>;
export default LanGearCodeThin;
