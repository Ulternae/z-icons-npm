import React from 'react';

export interface LanNoteMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteMedical(props: LanNoteMedicalProps): React.ReactElement;
export default LanNoteMedical;
