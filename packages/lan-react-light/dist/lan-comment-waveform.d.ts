import React from 'react';

export interface LanCommentWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentWaveform(props: LanCommentWaveformProps): React.ReactElement;
export default LanCommentWaveform;
