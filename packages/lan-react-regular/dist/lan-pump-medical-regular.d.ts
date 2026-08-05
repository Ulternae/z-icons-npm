import React from 'react';

export interface LanPumpMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPumpMedicalRegular(props: LanPumpMedicalRegularProps): React.ReactElement;
export default LanPumpMedicalRegular;
