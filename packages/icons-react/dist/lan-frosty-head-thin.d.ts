import React from 'react';

export interface LanFrostyHeadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrostyHeadThin: React.FC<LanFrostyHeadThinProps>;
export default LanFrostyHeadThin;
