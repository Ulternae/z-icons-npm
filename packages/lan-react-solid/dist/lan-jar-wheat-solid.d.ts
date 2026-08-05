import React from 'react';

export interface LanJarWheatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJarWheatSolid(props: LanJarWheatSolidProps): React.ReactElement;
export default LanJarWheatSolid;
