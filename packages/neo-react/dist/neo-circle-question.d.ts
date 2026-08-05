import React from 'react';

export interface NeoCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleQuestion(props: NeoCircleQuestionProps): React.ReactElement;
export default NeoCircleQuestion;
