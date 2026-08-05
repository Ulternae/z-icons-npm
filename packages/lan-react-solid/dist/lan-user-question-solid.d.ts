import React from 'react';

export interface LanUserQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserQuestionSolid(props: LanUserQuestionSolidProps): React.ReactElement;
export default LanUserQuestionSolid;
