import React from 'react';

export interface LanFileCircleQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCircleQuestionThin: React.FC<LanFileCircleQuestionThinProps>;
export default LanFileCircleQuestionThin;
