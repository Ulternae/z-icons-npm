import React from 'react';

export interface LanCommentsQuestionCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsQuestionCheck(props: LanCommentsQuestionCheckProps): React.ReactElement;
export default LanCommentsQuestionCheck;
