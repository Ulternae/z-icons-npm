import React from 'react';

export interface LanCommentMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMinusThin(props: LanCommentMinusThinProps): React.ReactElement;
export default LanCommentMinusThin;
