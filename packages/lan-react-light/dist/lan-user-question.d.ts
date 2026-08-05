import React from 'react';

export interface LanUserQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserQuestion(props: LanUserQuestionProps): React.ReactElement;
export default LanUserQuestion;
