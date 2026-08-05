import React from 'react';

export interface LanNoteMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteMedicalThin(props: LanNoteMedicalThinProps): React.ReactElement;
export default LanNoteMedicalThin;
