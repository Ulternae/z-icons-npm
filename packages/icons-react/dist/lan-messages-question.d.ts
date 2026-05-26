import React from 'react';

export interface LanMessagesQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessagesQuestion: React.FC<LanMessagesQuestionProps>;
export default LanMessagesQuestion;
