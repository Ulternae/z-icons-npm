import React from 'react';

export interface LanCommentQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentQuestion: React.FC<LanCommentQuestionProps>;
export default LanCommentQuestion;
