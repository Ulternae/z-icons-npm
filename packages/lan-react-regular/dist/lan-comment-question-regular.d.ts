import React from 'react';

export interface LanCommentQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentQuestionRegular(props: LanCommentQuestionRegularProps): React.ReactElement;
export default LanCommentQuestionRegular;
