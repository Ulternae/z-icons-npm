import React from 'react';

export interface LanInputTextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputTextThin: React.FC<LanInputTextThinProps>;
export default LanInputTextThin;
