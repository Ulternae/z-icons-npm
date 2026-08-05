import React from 'react';

export interface LanQuestionSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuestionSquareRegular(props: LanQuestionSquareRegularProps): React.ReactElement;
export default LanQuestionSquareRegular;
