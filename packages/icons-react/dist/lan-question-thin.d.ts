import React from 'react';

export interface LanQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuestionThin: React.FC<LanQuestionThinProps>;
export default LanQuestionThin;
