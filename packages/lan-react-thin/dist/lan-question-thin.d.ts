import React from 'react';

export interface LanQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuestionThin(props: LanQuestionThinProps): React.ReactElement;
export default LanQuestionThin;
