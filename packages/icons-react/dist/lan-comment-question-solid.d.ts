import React from 'react';

export interface LanCommentQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentQuestionSolid: React.FC<LanCommentQuestionSolidProps>;
export default LanCommentQuestionSolid;
