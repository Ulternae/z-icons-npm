import React from 'react';

export interface LanHouseMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseMedicalRegular(props: LanHouseMedicalRegularProps): React.ReactElement;
export default LanHouseMedicalRegular;
