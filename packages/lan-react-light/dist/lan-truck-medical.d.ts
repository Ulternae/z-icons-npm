import React from 'react';

export interface LanTruckMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTruckMedical(props: LanTruckMedicalProps): React.ReactElement;
export default LanTruckMedical;
