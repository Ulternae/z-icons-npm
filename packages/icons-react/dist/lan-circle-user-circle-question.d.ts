import React from 'react';

export interface LanCircleUserCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserCircleQuestion: React.FC<LanCircleUserCircleQuestionProps>;
export default LanCircleUserCircleQuestion;
