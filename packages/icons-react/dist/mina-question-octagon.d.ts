import React from 'react';

export interface MinaQuestionOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionOctagon: React.FC<MinaQuestionOctagonProps>;
export default MinaQuestionOctagon;
