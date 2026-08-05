import React from 'react';

export interface LanDesktopMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopMedicalThin(props: LanDesktopMedicalThinProps): React.ReactElement;
export default LanDesktopMedicalThin;
