import React from 'react';

export interface LanBlockQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockQuestionSolid: React.FC<LanBlockQuestionSolidProps>;
export default LanBlockQuestionSolid;
