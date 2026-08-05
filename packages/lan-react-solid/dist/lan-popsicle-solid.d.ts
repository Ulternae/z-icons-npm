import React from 'react';

export interface LanPopsicleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPopsicleSolid(props: LanPopsicleSolidProps): React.ReactElement;
export default LanPopsicleSolid;
