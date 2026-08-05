import React from 'react';

export interface LanLaptopMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLaptopMedical(props: LanLaptopMedicalProps): React.ReactElement;
export default LanLaptopMedical;
