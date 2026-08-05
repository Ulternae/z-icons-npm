import React from 'react';

export interface LanShirtRunningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtRunningSolid(props: LanShirtRunningSolidProps): React.ReactElement;
export default LanShirtRunningSolid;
