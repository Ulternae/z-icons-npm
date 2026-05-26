import React from 'react';

export interface LanVideoQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoQuestion: React.FC<LanVideoQuestionProps>;
export default LanVideoQuestion;
