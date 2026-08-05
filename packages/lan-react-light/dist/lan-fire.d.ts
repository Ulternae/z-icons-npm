import React from 'react';

export interface LanFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFire(props: LanFireProps): React.ReactElement;
export default LanFire;
