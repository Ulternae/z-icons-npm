import React from 'react';

export interface LanPrescriptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrescriptionSolid(props: LanPrescriptionSolidProps): React.ReactElement;
export default LanPrescriptionSolid;
