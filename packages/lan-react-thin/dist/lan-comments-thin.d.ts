import React from 'react';

export interface LanCommentsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsThin(props: LanCommentsThinProps): React.ReactElement;
export default LanCommentsThin;
