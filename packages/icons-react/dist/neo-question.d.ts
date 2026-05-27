import React from 'react';

export interface NeoQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoQuestion: React.FC<NeoQuestionProps>;
export default NeoQuestion;
