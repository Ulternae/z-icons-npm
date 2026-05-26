import React from 'react';

export interface LanSealQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSealQuestionSolid: React.FC<LanSealQuestionSolidProps>;
export default LanSealQuestionSolid;
