import React from 'react';

export interface LanFireSmokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireSmoke(props: LanFireSmokeProps): React.ReactElement;
export default LanFireSmoke;
