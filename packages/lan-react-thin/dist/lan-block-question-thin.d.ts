import React from 'react';

export interface LanBlockQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockQuestionThin(props: LanBlockQuestionThinProps): React.ReactElement;
export default LanBlockQuestionThin;
