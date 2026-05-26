import React from 'react';

export interface LanGiftsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGiftsSolid: React.FC<LanGiftsSolidProps>;
export default LanGiftsSolid;
