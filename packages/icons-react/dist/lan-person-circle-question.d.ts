import React from 'react';

export interface LanPersonCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleQuestion: React.FC<LanPersonCircleQuestionProps>;
export default LanPersonCircleQuestion;
