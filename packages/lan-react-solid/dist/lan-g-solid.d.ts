import React from 'react';

export interface LanGSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGSolid(props: LanGSolidProps): React.ReactElement;
export default LanGSolid;
