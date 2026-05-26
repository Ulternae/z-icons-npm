import React from 'react';

export interface LanVideoQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoQuestionSolid: React.FC<LanVideoQuestionSolidProps>;
export default LanVideoQuestionSolid;
