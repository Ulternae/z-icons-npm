import React from 'react';

export interface MinaQuestionSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaQuestionSquareSolid(props: MinaQuestionSquareSolidProps): React.ReactElement;
export default MinaQuestionSquareSolid;
