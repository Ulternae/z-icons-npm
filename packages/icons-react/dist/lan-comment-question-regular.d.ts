import React from 'react';

export interface LanCommentQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentQuestionRegular: React.FC<LanCommentQuestionRegularProps>;
export default LanCommentQuestionRegular;
