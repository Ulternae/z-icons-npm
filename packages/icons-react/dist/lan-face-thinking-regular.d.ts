import React from 'react';

export interface LanFaceThinkingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceThinkingRegular: React.FC<LanFaceThinkingRegularProps>;
export default LanFaceThinkingRegular;
