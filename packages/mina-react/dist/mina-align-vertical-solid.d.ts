import React from 'react';

export interface MinaAlignVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignVerticalSolid(props: MinaAlignVerticalSolidProps): React.ReactElement;
export default MinaAlignVerticalSolid;
