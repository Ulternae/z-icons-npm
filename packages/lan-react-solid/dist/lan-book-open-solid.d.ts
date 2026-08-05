import React from 'react';

export interface LanBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenSolid(props: LanBookOpenSolidProps): React.ReactElement;
export default LanBookOpenSolid;
