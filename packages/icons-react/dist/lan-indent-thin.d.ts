import React from 'react';

export interface LanIndentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndentThin: React.FC<LanIndentThinProps>;
export default LanIndentThin;
