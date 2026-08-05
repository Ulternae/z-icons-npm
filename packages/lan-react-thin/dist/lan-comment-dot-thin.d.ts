import React from 'react';

export interface LanCommentDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDotThin(props: LanCommentDotThinProps): React.ReactElement;
export default LanCommentDotThin;
