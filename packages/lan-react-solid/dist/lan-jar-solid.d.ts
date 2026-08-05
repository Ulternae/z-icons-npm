import React from 'react';

export interface LanJarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJarSolid(props: LanJarSolidProps): React.ReactElement;
export default LanJarSolid;
