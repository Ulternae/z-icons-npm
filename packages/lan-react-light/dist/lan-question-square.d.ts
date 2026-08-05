import React from 'react';

export interface LanQuestionSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuestionSquare(props: LanQuestionSquareProps): React.ReactElement;
export default LanQuestionSquare;
