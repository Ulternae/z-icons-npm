import React from 'react';

export interface LanCartFlatbedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartFlatbedSolid(props: LanCartFlatbedSolidProps): React.ReactElement;
export default LanCartFlatbedSolid;
