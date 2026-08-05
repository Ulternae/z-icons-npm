import React from 'react';

export interface MinaQuestionDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionDiamond(props: MinaQuestionDiamondProps): React.ReactElement;
export default MinaQuestionDiamond;
