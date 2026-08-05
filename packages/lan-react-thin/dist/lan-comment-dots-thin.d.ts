import React from 'react';

export interface LanCommentDotsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentDotsThin(props: LanCommentDotsThinProps): React.ReactElement;
export default LanCommentDotsThin;
