import React from 'react';

export interface LanFileCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleQuestion(props: LanFileCircleQuestionProps): React.ReactElement;
export default LanFileCircleQuestion;
