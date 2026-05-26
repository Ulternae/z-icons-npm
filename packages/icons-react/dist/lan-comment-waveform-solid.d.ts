import React from 'react';

export interface LanCommentWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentWaveformSolid: React.FC<LanCommentWaveformSolidProps>;
export default LanCommentWaveformSolid;
