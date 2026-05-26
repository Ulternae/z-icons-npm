import React from 'react';

export interface LanBookMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookMedical: React.FC<LanBookMedicalProps>;
export default LanBookMedical;
