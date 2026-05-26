import React from 'react';

export interface LanFlorinSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlorinSignThin: React.FC<LanFlorinSignThinProps>;
export default LanFlorinSignThin;
