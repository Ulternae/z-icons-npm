import React from 'react';

export interface LanSubtitlesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSubtitlesThin: React.FC<LanSubtitlesThinProps>;
export default LanSubtitlesThin;
