import React from 'react';

export interface LanRugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRugSolid(props: LanRugSolidProps): React.ReactElement;
export default LanRugSolid;
