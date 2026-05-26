import React from 'react';

export interface LanMessagesQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessagesQuestionRegular: React.FC<LanMessagesQuestionRegularProps>;
export default LanMessagesQuestionRegular;
