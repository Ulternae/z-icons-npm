import React from 'react';

export interface LanHouseMedicalCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseMedicalCircleCheck(props: LanHouseMedicalCircleCheckProps): React.ReactElement;
export default LanHouseMedicalCircleCheck;
