import React from 'react';

export interface LanMessagesQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessagesQuestionThin: React.FC<LanMessagesQuestionThinProps>;
export default LanMessagesQuestionThin;
