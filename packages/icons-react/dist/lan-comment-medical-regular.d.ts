import React from 'react';

export interface LanCommentMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMedicalRegular: React.FC<LanCommentMedicalRegularProps>;
export default LanCommentMedicalRegular;
