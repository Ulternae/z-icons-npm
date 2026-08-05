import React from 'react';

export interface MinaRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRibbonSolid(props: MinaRibbonSolidProps): React.ReactElement;
export default MinaRibbonSolid;
