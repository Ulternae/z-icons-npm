import React from 'react';

export interface LanFlatbreadStuffedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlatbreadStuffedSolid(props: LanFlatbreadStuffedSolidProps): React.ReactElement;
export default LanFlatbreadStuffedSolid;
