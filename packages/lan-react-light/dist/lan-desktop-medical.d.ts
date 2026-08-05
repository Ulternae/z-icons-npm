import React from 'react';

export interface LanDesktopMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopMedical(props: LanDesktopMedicalProps): React.ReactElement;
export default LanDesktopMedical;
