import React from 'react';

export interface LanKeyboardBrightnessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeyboardBrightnessThin: React.FC<LanKeyboardBrightnessThinProps>;
export default LanKeyboardBrightnessThin;
