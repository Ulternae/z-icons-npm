import React from 'react';

export interface LanFlatbreadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlatbreadSolid(props: LanFlatbreadSolidProps): React.ReactElement;
export default LanFlatbreadSolid;
