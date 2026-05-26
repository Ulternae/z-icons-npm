import React from 'react';

export interface LanTableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableThin: React.FC<LanTableThinProps>;
export default LanTableThin;
