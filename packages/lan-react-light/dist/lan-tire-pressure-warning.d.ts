import React from 'react';

export interface LanTirePressureWarningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTirePressureWarning(props: LanTirePressureWarningProps): React.ReactElement;
export default LanTirePressureWarning;
