import React from 'react';

export interface LanVacuumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVacuum(props: LanVacuumProps): React.ReactElement;
export default LanVacuum;
