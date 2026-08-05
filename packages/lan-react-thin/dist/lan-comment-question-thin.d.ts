import React from 'react';

export interface LanCommentQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentQuestionThin(props: LanCommentQuestionThinProps): React.ReactElement;
export default LanCommentQuestionThin;
