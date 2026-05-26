import React from 'react';

export interface LanFaceThinkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceThinkingThin: React.FC<LanFaceThinkingThinProps>;
export default LanFaceThinkingThin;
