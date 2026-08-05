import React from 'react';

export interface LanCommentPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentPlusThin(props: LanCommentPlusThinProps): React.ReactElement;
export default LanCommentPlusThin;
