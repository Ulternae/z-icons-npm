import React from 'react';

export interface MinaTreeDeciduousSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTreeDeciduousSolid(props: MinaTreeDeciduousSolidProps): React.ReactElement;
export default MinaTreeDeciduousSolid;
