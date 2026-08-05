import React from 'react';

export interface LanBooksMedicalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBooksMedicalThin(props: LanBooksMedicalThinProps): React.ReactElement;
export default LanBooksMedicalThin;
