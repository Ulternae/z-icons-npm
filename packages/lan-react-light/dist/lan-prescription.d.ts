import React from 'react';

export interface LanPrescriptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrescription(props: LanPrescriptionProps): React.ReactElement;
export default LanPrescription;
