import React from 'react';

export interface LanCommentWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentWaveformSolid(props: LanCommentWaveformSolidProps): React.ReactElement;
export default LanCommentWaveformSolid;
