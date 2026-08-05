import React from 'react';

export interface LanHouseMedicalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseMedical(props: LanHouseMedicalProps): React.ReactElement;
export default LanHouseMedical;
