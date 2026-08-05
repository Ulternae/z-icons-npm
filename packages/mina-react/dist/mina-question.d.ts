import React from 'react';

export interface MinaQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestion(props: MinaQuestionProps): React.ReactElement;
export default MinaQuestion;
