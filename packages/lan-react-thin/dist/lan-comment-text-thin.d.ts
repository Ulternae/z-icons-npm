import React from 'react';

export interface LanCommentTextThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentTextThin(props: LanCommentTextThinProps): React.ReactElement;
export default LanCommentTextThin;
