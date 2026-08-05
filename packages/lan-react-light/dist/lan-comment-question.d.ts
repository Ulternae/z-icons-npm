import React from 'react';

export interface LanCommentQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentQuestion(props: LanCommentQuestionProps): React.ReactElement;
export default LanCommentQuestion;
