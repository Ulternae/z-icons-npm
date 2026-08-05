import React from 'react';

export interface MinaChipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChipSolid(props: MinaChipSolidProps): React.ReactElement;
export default MinaChipSolid;
