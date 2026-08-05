import React from 'react';

export interface LanFileMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMedicalThin(props: LanFileMedicalThinProps): React.ReactElement;
export default LanFileMedicalThin;
