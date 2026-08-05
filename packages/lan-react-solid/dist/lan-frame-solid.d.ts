import React from 'react';

export interface LanFrameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrameSolid(props: LanFrameSolidProps): React.ReactElement;
export default LanFrameSolid;
