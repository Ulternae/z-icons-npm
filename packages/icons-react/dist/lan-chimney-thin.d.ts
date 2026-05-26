import React from 'react';

export interface LanChimneyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChimneyThin: React.FC<LanChimneyThinProps>;
export default LanChimneyThin;
