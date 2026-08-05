import React from 'react';

export interface LanCloseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloseSolid(props: LanCloseSolidProps): React.ReactElement;
export default LanCloseSolid;
