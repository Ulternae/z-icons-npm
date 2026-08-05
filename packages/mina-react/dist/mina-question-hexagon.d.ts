import React from 'react';

export interface MinaQuestionHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionHexagon(props: MinaQuestionHexagonProps): React.ReactElement;
export default MinaQuestionHexagon;
