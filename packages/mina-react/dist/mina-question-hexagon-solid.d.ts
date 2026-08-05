import React from 'react';

export interface MinaQuestionHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionHexagonSolid(props: MinaQuestionHexagonSolidProps): React.ReactElement;
export default MinaQuestionHexagonSolid;
