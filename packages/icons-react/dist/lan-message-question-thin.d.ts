import React from 'react';

export interface LanMessageQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageQuestionThin: React.FC<LanMessageQuestionThinProps>;
export default LanMessageQuestionThin;
