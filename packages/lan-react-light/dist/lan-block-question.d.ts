import React from 'react';

export interface LanBlockQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockQuestion(props: LanBlockQuestionProps): React.ReactElement;
export default LanBlockQuestion;
