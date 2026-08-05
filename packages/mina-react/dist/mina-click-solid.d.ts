import React from 'react';

export interface MinaClickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClickSolid(props: MinaClickSolidProps): React.ReactElement;
export default MinaClickSolid;
