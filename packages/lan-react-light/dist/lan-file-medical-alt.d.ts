import React from 'react';

export interface LanFileMedicalAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMedicalAlt(props: LanFileMedicalAltProps): React.ReactElement;
export default LanFileMedicalAlt;
