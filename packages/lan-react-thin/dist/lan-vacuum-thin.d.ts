import React from 'react';

export interface LanVacuumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVacuumThin(props: LanVacuumThinProps): React.ReactElement;
export default LanVacuumThin;
