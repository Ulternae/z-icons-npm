import React from 'react';

export interface LanFileMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMedical(props: LanFileMedicalProps): React.ReactElement;
export default LanFileMedical;
