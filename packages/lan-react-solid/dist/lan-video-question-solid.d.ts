import React from 'react';

export interface LanVideoQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoQuestionSolid(props: LanVideoQuestionSolidProps): React.ReactElement;
export default LanVideoQuestionSolid;
