import React from 'react';

export interface LanPrescriptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrescriptionRegular(props: LanPrescriptionRegularProps): React.ReactElement;
export default LanPrescriptionRegular;
