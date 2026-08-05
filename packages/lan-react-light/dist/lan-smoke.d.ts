import React from 'react';

export interface LanSmokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmoke(props: LanSmokeProps): React.ReactElement;
export default LanSmoke;
