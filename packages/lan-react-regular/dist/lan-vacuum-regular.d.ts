import React from 'react';

export interface LanVacuumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVacuumRegular(props: LanVacuumRegularProps): React.ReactElement;
export default LanVacuumRegular;
