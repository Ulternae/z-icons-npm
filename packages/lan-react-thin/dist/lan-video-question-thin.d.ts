import React from 'react';

export interface LanVideoQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoQuestionThin(props: LanVideoQuestionThinProps): React.ReactElement;
export default LanVideoQuestionThin;
