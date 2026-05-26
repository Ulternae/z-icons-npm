import React from 'react';

export interface LanTextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextThin: React.FC<LanTextThinProps>;
export default LanTextThin;
