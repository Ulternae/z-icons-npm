import React from 'react';

export interface CoreCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCircleQuestion(props: CoreCircleQuestionProps): React.ReactElement;
export default CoreCircleQuestion;
