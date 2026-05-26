import React from 'react';

export interface LanVideoQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoQuestionThin: React.FC<LanVideoQuestionThinProps>;
export default LanVideoQuestionThin;
