import React from 'react';

export interface LanSealQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSealQuestion: React.FC<LanSealQuestionProps>;
export default LanSealQuestion;
