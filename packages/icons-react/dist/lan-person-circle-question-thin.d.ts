import React from 'react';

export interface LanPersonCircleQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCircleQuestionThin: React.FC<LanPersonCircleQuestionThinProps>;
export default LanPersonCircleQuestionThin;
