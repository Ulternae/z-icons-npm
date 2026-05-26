import React from 'react';

export interface LanUserQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserQuestionThin: React.FC<LanUserQuestionThinProps>;
export default LanUserQuestionThin;
