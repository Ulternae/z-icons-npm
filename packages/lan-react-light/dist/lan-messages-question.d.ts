import React from 'react';

export interface LanMessagesQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessagesQuestion(props: LanMessagesQuestionProps): React.ReactElement;
export default LanMessagesQuestion;
