import React from 'react';

export interface LanFilesMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilesMedical: React.FC<LanFilesMedicalProps>;
export default LanFilesMedical;
