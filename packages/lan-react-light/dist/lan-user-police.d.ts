import React from 'react';

export interface LanUserPoliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPolice(props: LanUserPoliceProps): React.ReactElement;
export default LanUserPolice;
