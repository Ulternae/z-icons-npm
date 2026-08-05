import React from 'react';

export interface LanQuestionSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuestionSquareThin(props: LanQuestionSquareThinProps): React.ReactElement;
export default LanQuestionSquareThin;
