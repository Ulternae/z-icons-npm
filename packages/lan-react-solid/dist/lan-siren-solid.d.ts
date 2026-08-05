import React from 'react';

export interface LanSirenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSirenSolid(props: LanSirenSolidProps): React.ReactElement;
export default LanSirenSolid;
