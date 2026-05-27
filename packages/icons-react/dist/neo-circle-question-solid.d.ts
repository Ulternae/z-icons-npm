import React from 'react';

export interface NeoCircleQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleQuestionSolid: React.FC<NeoCircleQuestionSolidProps>;
export default NeoCircleQuestionSolid;
