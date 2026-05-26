import React from 'react';

export interface LanBookMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookMedicalRegular: React.FC<LanBookMedicalRegularProps>;
export default LanBookMedicalRegular;
