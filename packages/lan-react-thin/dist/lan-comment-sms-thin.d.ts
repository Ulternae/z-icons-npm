import React from 'react';

export interface LanCommentSmsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSmsThin(props: LanCommentSmsThinProps): React.ReactElement;
export default LanCommentSmsThin;
