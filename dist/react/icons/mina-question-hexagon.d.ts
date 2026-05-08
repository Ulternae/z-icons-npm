import React from 'react';

export interface MinaQuestionHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionHexagon: React.FC<MinaQuestionHexagonProps>;
export default MinaQuestionHexagon;
