import React from 'react';

export interface LanSealQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSealQuestionThin(props: LanSealQuestionThinProps): React.ReactElement;
export default LanSealQuestionThin;
