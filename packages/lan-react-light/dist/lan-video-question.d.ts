import React from 'react';

export interface LanVideoQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoQuestion(props: LanVideoQuestionProps): React.ReactElement;
export default LanVideoQuestion;
