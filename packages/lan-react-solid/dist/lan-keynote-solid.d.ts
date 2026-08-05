import React from 'react';

export interface LanKeynoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeynoteSolid(props: LanKeynoteSolidProps): React.ReactElement;
export default LanKeynoteSolid;
