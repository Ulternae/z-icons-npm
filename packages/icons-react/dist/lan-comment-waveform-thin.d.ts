import React from 'react';

export interface LanCommentWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentWaveformThin: React.FC<LanCommentWaveformThinProps>;
export default LanCommentWaveformThin;
