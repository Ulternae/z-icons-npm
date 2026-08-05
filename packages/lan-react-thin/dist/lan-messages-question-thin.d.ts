import React from 'react';

export interface LanMessagesQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessagesQuestionThin(props: LanMessagesQuestionThinProps): React.ReactElement;
export default LanMessagesQuestionThin;
