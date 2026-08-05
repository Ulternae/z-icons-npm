import React from 'react';

export interface LanNoteMedicalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNoteMedicalRegular(props: LanNoteMedicalRegularProps): React.ReactElement;
export default LanNoteMedicalRegular;
