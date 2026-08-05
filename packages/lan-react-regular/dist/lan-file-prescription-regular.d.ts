import React from 'react';

export interface LanFilePrescriptionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePrescriptionRegular(props: LanFilePrescriptionRegularProps): React.ReactElement;
export default LanFilePrescriptionRegular;
