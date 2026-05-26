import React from 'react';

export interface LanCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuestion: React.FC<LanCircleQuestionProps>;
export default LanCircleQuestion;
