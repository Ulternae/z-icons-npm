import React from 'react';

export interface LanPrescriptionBottlePillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrescriptionBottlePill(props: LanPrescriptionBottlePillProps): React.ReactElement;
export default LanPrescriptionBottlePill;
