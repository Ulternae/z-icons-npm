import React from 'react';

export interface LanCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuestion(props: LanCircleQuestionProps): React.ReactElement;
export default LanCircleQuestion;
