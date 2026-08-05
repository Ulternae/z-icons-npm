import React from 'react';

export interface LanTruckMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMedicalRegular(props: LanTruckMedicalRegularProps): React.ReactElement;
export default LanTruckMedicalRegular;
