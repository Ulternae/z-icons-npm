import React from 'react';

export interface NeoCircleQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleQuestion: React.FC<NeoCircleQuestionProps>;
export default NeoCircleQuestion;
