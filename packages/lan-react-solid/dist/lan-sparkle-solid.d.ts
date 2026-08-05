import React from 'react';

export interface LanSparkleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSparkleSolid(props: LanSparkleSolidProps): React.ReactElement;
export default LanSparkleSolid;
