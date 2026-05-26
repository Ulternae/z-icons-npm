import React from 'react';

export interface LanFileCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleQuestion: React.FC<LanFileCircleQuestionProps>;
export default LanFileCircleQuestion;
