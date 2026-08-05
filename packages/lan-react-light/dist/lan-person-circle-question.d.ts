import React from 'react';

export interface LanPersonCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCircleQuestion(props: LanPersonCircleQuestionProps): React.ReactElement;
export default LanPersonCircleQuestion;
