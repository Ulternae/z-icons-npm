import React from 'react';

export interface LanBlanketFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlanketFire(props: LanBlanketFireProps): React.ReactElement;
export default LanBlanketFire;
