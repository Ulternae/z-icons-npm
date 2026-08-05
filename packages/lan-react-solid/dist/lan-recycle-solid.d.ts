import React from 'react';

export interface LanRecycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRecycleSolid(props: LanRecycleSolidProps): React.ReactElement;
export default LanRecycleSolid;
