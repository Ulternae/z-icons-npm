import React from 'react';

export interface LanCauldronSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCauldronSolid(props: LanCauldronSolidProps): React.ReactElement;
export default LanCauldronSolid;
