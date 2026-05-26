import React from 'react';

export interface LanMessagesQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessagesQuestionSolid: React.FC<LanMessagesQuestionSolidProps>;
export default LanMessagesQuestionSolid;
