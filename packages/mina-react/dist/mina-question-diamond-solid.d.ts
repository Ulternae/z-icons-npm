import React from 'react';

export interface MinaQuestionDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionDiamondSolid(props: MinaQuestionDiamondSolidProps): React.ReactElement;
export default MinaQuestionDiamondSolid;
