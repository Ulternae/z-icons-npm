import React from 'react';

export interface NeoQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoQuestion(props: NeoQuestionProps): React.ReactElement;
export default NeoQuestion;
