import React from 'react';

export interface LanHandHoldingMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingMedical(props: LanHandHoldingMedicalProps): React.ReactElement;
export default LanHandHoldingMedical;
