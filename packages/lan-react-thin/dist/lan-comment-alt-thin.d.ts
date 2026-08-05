import React from 'react';

export interface LanCommentAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltThin(props: LanCommentAltThinProps): React.ReactElement;
export default LanCommentAltThin;
