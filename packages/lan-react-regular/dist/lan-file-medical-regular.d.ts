import React from 'react';

export interface LanFileMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMedicalRegular(props: LanFileMedicalRegularProps): React.ReactElement;
export default LanFileMedicalRegular;
