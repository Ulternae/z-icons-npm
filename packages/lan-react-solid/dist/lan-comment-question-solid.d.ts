import React from 'react';

export interface LanCommentQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentQuestionSolid(props: LanCommentQuestionSolidProps): React.ReactElement;
export default LanCommentQuestionSolid;
