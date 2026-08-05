import React from 'react';

export interface LanCircleQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuestionSolid(props: LanCircleQuestionSolidProps): React.ReactElement;
export default LanCircleQuestionSolid;
