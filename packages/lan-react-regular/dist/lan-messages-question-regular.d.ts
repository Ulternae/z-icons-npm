import React from 'react';

export interface LanMessagesQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessagesQuestionRegular(props: LanMessagesQuestionRegularProps): React.ReactElement;
export default LanMessagesQuestionRegular;
