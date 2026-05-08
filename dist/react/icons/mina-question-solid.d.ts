import React from 'react';

export interface MinaQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionSolid: React.FC<MinaQuestionSolidProps>;
export default MinaQuestionSolid;
