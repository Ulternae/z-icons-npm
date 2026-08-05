import React from 'react';

export interface LanFireFlameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireFlameSolid(props: LanFireFlameSolidProps): React.ReactElement;
export default LanFireFlameSolid;
