import React from 'react';

export interface CoreQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreQuestionSolid: React.FC<CoreQuestionSolidProps>;
export default CoreQuestionSolid;
