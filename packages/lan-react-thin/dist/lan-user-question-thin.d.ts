import React from 'react';

export interface LanUserQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserQuestionThin(props: LanUserQuestionThinProps): React.ReactElement;
export default LanUserQuestionThin;
