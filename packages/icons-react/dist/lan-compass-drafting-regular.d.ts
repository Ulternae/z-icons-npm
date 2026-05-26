import React from 'react';

export interface LanCompassDraftingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassDraftingRegular: React.FC<LanCompassDraftingRegularProps>;
export default LanCompassDraftingRegular;
