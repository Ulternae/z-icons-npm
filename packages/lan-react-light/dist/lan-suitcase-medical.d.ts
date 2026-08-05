import React from 'react';

export interface LanSuitcaseMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcaseMedical(props: LanSuitcaseMedicalProps): React.ReactElement;
export default LanSuitcaseMedical;
