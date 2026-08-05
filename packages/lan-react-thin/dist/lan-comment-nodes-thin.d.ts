import React from 'react';

export interface LanCommentNodesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentNodesThin(props: LanCommentNodesThinProps): React.ReactElement;
export default LanCommentNodesThin;
