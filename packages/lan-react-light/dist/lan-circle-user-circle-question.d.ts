import React from 'react';

export interface LanCircleUserCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUserCircleQuestion(props: LanCircleUserCircleQuestionProps): React.ReactElement;
export default LanCircleUserCircleQuestion;
