import React from 'react';

export interface LanBooksMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBooksMedicalRegular: React.FC<LanBooksMedicalRegularProps>;
export default LanBooksMedicalRegular;
