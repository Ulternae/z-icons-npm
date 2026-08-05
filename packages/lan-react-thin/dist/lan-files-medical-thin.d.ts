import React from 'react';

export interface LanFilesMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilesMedicalThin(props: LanFilesMedicalThinProps): React.ReactElement;
export default LanFilesMedicalThin;
