import React from 'react';

export interface LanQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuestionSolid(props: LanQuestionSolidProps): React.ReactElement;
export default LanQuestionSolid;
