import React from 'react';

export interface LanMessagesQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessagesQuestionSolid(props: LanMessagesQuestionSolidProps): React.ReactElement;
export default LanMessagesQuestionSolid;
