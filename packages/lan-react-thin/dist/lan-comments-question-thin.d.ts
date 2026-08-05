import React from 'react';

export interface LanCommentsQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentsQuestionThin(props: LanCommentsQuestionThinProps): React.ReactElement;
export default LanCommentsQuestionThin;
