import React from 'react';

export interface LanTrilliumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrilliumSolid(props: LanTrilliumSolidProps): React.ReactElement;
export default LanTrilliumSolid;
