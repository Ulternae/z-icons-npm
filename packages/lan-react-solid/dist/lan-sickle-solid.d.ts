import React from 'react';

export interface LanSickleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSickleSolid(props: LanSickleSolidProps): React.ReactElement;
export default LanSickleSolid;
