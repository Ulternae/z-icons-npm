import React from 'react';

export interface LanUserQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserQuestion: React.FC<LanUserQuestionProps>;
export default LanUserQuestion;
