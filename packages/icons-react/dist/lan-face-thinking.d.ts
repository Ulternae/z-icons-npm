import React from 'react';

export interface LanFaceThinkingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceThinking: React.FC<LanFaceThinkingProps>;
export default LanFaceThinking;
