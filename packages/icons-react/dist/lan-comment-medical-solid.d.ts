import React from 'react';

export interface LanCommentMedicalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMedicalSolid: React.FC<LanCommentMedicalSolidProps>;
export default LanCommentMedicalSolid;
