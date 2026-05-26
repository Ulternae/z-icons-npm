import React from 'react';

export interface LanBlockQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockQuestion: React.FC<LanBlockQuestionProps>;
export default LanBlockQuestion;
