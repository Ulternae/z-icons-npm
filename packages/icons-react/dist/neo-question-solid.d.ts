import React from 'react';

export interface NeoQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoQuestionSolid: React.FC<NeoQuestionSolidProps>;
export default NeoQuestionSolid;
