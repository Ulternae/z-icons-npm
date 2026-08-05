import React from 'react';

export interface LanCommentWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentWaveformRegular(props: LanCommentWaveformRegularProps): React.ReactElement;
export default LanCommentWaveformRegular;
