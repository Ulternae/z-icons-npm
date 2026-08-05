import React from 'react';

export interface LanBlockQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockQuestionSolid(props: LanBlockQuestionSolidProps): React.ReactElement;
export default LanBlockQuestionSolid;
