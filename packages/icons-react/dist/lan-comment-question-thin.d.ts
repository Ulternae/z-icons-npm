import React from 'react';

export interface LanCommentQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentQuestionThin: React.FC<LanCommentQuestionThinProps>;
export default LanCommentQuestionThin;
