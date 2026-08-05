import React from 'react';

export interface LanUsersMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersMedical(props: LanUsersMedicalProps): React.ReactElement;
export default LanUsersMedical;
