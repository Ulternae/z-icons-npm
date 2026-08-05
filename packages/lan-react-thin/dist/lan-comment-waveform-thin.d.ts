import React from 'react';

export interface LanCommentWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentWaveformThin(props: LanCommentWaveformThinProps): React.ReactElement;
export default LanCommentWaveformThin;
