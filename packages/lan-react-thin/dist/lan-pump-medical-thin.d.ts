import React from 'react';

export interface LanPumpMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpMedicalThin(props: LanPumpMedicalThinProps): React.ReactElement;
export default LanPumpMedicalThin;
