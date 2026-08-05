import React from 'react';

export interface LanCatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCatSolid(props: LanCatSolidProps): React.ReactElement;
export default LanCatSolid;
