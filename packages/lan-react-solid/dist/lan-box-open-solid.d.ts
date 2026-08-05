import React from 'react';

export interface LanBoxOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxOpenSolid(props: LanBoxOpenSolidProps): React.ReactElement;
export default LanBoxOpenSolid;
