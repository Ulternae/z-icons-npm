import React from 'react';

export interface LanTruckMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMedicalThin(props: LanTruckMedicalThinProps): React.ReactElement;
export default LanTruckMedicalThin;
