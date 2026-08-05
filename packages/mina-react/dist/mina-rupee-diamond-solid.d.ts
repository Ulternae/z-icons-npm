import React from 'react';

export interface MinaRupeeDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeDiamondSolid(props: MinaRupeeDiamondSolidProps): React.ReactElement;
export default MinaRupeeDiamondSolid;
