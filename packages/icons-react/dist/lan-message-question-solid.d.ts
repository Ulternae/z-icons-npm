import React from 'react';

export interface LanMessageQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageQuestionSolid: React.FC<LanMessageQuestionSolidProps>;
export default LanMessageQuestionSolid;
