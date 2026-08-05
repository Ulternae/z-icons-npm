import React from 'react';

export interface LanFilePrescriptionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePrescriptionThin(props: LanFilePrescriptionThinProps): React.ReactElement;
export default LanFilePrescriptionThin;
