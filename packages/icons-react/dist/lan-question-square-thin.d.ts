import React from 'react';

export interface LanQuestionSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQuestionSquareThin: React.FC<LanQuestionSquareThinProps>;
export default LanQuestionSquareThin;
