import React from 'react';

export interface LanCommentMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMedical: React.FC<LanCommentMedicalProps>;
export default LanCommentMedical;
