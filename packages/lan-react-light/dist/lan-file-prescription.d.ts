import React from 'react';

export interface LanFilePrescriptionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePrescription(props: LanFilePrescriptionProps): React.ReactElement;
export default LanFilePrescription;
