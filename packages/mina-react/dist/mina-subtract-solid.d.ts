import React from 'react';

export interface MinaSubtractSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSubtractSolid(props: MinaSubtractSolidProps): React.ReactElement;
export default MinaSubtractSolid;
