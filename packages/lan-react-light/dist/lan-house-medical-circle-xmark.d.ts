import React from 'react';

export interface LanHouseMedicalCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseMedicalCircleXmark(props: LanHouseMedicalCircleXmarkProps): React.ReactElement;
export default LanHouseMedicalCircleXmark;
