import React from 'react';

export interface LanCommentsQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsQuestion(props: LanCommentsQuestionProps): React.ReactElement;
export default LanCommentsQuestion;
