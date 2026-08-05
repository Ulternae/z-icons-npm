import React from 'react';

export interface LanQuestionSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuestionSquareSolid(props: LanQuestionSquareSolidProps): React.ReactElement;
export default LanQuestionSquareSolid;
