import React from 'react';

export interface LanFanTableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFanTableThin: React.FC<LanFanTableThinProps>;
export default LanFanTableThin;
