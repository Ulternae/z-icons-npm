import React from 'react';

export interface LanQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuestion(props: LanQuestionProps): React.ReactElement;
export default LanQuestion;
