import React from 'react';

export interface LanCommentsQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsQuestionThin: React.FC<LanCommentsQuestionThinProps>;
export default LanCommentsQuestionThin;
