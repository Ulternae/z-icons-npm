import React from 'react';

export interface LanHillAvalancheProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHillAvalanche(props: LanHillAvalancheProps): React.ReactElement;
export default LanHillAvalanche;
