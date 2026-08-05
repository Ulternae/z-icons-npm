import React from 'react';

export interface LanFilePrescriptionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePrescriptionSolid(props: LanFilePrescriptionSolidProps): React.ReactElement;
export default LanFilePrescriptionSolid;
