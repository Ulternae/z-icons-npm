import React from 'react';

export interface LanCommentWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentWaveform: React.FC<LanCommentWaveformProps>;
export default LanCommentWaveform;
