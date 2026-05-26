import React from 'react';

export interface LanCircleQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuestionThin: React.FC<LanCircleQuestionThinProps>;
export default LanCircleQuestionThin;
