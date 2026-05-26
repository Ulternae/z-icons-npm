import React from 'react';

export interface LanBlockQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockQuestionThin: React.FC<LanBlockQuestionThinProps>;
export default LanBlockQuestionThin;
