import React from 'react';

export interface LanCompassDraftingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassDraftingSolid: React.FC<LanCompassDraftingSolidProps>;
export default LanCompassDraftingSolid;
