import React from 'react';

export interface LanHandHoldingMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingMedical: React.FC<LanHandHoldingMedicalProps>;
export default LanHandHoldingMedical;
