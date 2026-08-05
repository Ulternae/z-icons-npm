import React from 'react';

export interface LanPumpMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpMedical(props: LanPumpMedicalProps): React.ReactElement;
export default LanPumpMedical;
