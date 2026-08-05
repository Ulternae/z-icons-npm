import React from 'react';

export interface LanCircleQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuestionThin(props: LanCircleQuestionThinProps): React.ReactElement;
export default LanCircleQuestionThin;
