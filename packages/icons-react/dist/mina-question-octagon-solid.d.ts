import React from 'react';

export interface MinaQuestionOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionOctagonSolid: React.FC<MinaQuestionOctagonSolidProps>;
export default MinaQuestionOctagonSolid;
