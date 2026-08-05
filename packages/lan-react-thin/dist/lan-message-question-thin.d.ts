import React from 'react';

export interface LanMessageQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageQuestionThin(props: LanMessageQuestionThinProps): React.ReactElement;
export default LanMessageQuestionThin;
