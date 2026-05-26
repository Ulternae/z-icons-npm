import React from 'react';

export interface LanQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuestion: React.FC<LanQuestionProps>;
export default LanQuestion;
