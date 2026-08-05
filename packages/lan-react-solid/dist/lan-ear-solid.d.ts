import React from 'react';

export interface LanEarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarSolid(props: LanEarSolidProps): React.ReactElement;
export default LanEarSolid;
