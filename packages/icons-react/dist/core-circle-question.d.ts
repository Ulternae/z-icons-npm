import React from 'react';

export interface CoreCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCircleQuestion: React.FC<CoreCircleQuestionProps>;
export default CoreCircleQuestion;
