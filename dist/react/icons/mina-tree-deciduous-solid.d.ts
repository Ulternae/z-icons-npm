import React from 'react';

export interface MinaTreeDeciduousSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTreeDeciduousSolid: React.FC<MinaTreeDeciduousSolidProps>;
export default MinaTreeDeciduousSolid;
