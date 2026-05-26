import React from 'react';

export interface LanCommentMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMedicalThin: React.FC<LanCommentMedicalThinProps>;
export default LanCommentMedicalThin;
