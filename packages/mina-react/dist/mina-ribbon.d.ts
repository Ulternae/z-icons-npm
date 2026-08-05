import React from 'react';

export interface MinaRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRibbon(props: MinaRibbonProps): React.ReactElement;
export default MinaRibbon;
