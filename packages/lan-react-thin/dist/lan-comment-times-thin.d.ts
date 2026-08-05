import React from 'react';

export interface LanCommentTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentTimesThin(props: LanCommentTimesThinProps): React.ReactElement;
export default LanCommentTimesThin;
