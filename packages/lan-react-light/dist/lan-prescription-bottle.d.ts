import React from 'react';

export interface LanPrescriptionBottleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrescriptionBottle(props: LanPrescriptionBottleProps): React.ReactElement;
export default LanPrescriptionBottle;
