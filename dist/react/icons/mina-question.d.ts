import React from 'react';

export interface MinaQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestion: React.FC<MinaQuestionProps>;
export default MinaQuestion;
