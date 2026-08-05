import React from 'react';

export interface LanSirenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSiren(props: LanSirenProps): React.ReactElement;
export default LanSiren;
