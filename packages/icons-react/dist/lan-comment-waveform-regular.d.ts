import React from 'react';

export interface LanCommentWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentWaveformRegular: React.FC<LanCommentWaveformRegularProps>;
export default LanCommentWaveformRegular;
