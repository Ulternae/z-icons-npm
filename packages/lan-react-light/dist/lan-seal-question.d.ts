import React from 'react';

export interface LanSealQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSealQuestion(props: LanSealQuestionProps): React.ReactElement;
export default LanSealQuestion;
