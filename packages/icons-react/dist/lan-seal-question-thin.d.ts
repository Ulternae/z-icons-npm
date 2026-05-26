import React from 'react';

export interface LanSealQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSealQuestionThin: React.FC<LanSealQuestionThinProps>;
export default LanSealQuestionThin;
