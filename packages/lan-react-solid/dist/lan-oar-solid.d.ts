import React from 'react';

export interface LanOarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOarSolid(props: LanOarSolidProps): React.ReactElement;
export default LanOarSolid;
