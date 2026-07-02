import React from 'react';

export interface CoreQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreQuestion(props: CoreQuestionProps): React.ReactElement;
export default CoreQuestion;
