import React from 'react';

export interface CoreQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreQuestion: React.FC<CoreQuestionProps>;
export default CoreQuestion;
