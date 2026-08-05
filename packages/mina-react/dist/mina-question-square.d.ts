import React from 'react';

export interface MinaQuestionSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionSquare(props: MinaQuestionSquareProps): React.ReactElement;
export default MinaQuestionSquare;
