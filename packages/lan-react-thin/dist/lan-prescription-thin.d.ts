import React from 'react';

export interface LanPrescriptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrescriptionThin(props: LanPrescriptionThinProps): React.ReactElement;
export default LanPrescriptionThin;
