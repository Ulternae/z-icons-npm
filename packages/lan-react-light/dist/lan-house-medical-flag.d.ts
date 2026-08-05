import React from 'react';

export interface LanHouseMedicalFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseMedicalFlag(props: LanHouseMedicalFlagProps): React.ReactElement;
export default LanHouseMedicalFlag;
