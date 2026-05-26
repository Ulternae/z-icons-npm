import React from 'react';

export interface LanChurchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChurchThin: React.FC<LanChurchThinProps>;
export default LanChurchThin;
