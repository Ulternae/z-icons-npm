import React from 'react';

export interface MinaForwardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardSolid: React.FC<MinaForwardSolidProps>;
export default MinaForwardSolid;
