import React from 'react';

export interface LanHouseMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseMedicalThin(props: LanHouseMedicalThinProps): React.ReactElement;
export default LanHouseMedicalThin;
