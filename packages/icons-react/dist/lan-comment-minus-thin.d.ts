import React from 'react';

export interface LanCommentMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMinusThin: React.FC<LanCommentMinusThinProps>;
export default LanCommentMinusThin;
