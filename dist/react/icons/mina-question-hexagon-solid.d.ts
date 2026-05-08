import React from 'react';

export interface MinaQuestionHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaQuestionHexagonSolid: React.FC<MinaQuestionHexagonSolidProps>;
export default MinaQuestionHexagonSolid;
