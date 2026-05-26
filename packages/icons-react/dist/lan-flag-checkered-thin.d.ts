import React from 'react';

export interface LanFlagCheckeredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagCheckeredThin: React.FC<LanFlagCheckeredThinProps>;
export default LanFlagCheckeredThin;
