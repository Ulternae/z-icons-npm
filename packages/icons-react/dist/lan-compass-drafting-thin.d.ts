import React from 'react';

export interface LanCompassDraftingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassDraftingThin: React.FC<LanCompassDraftingThinProps>;
export default LanCompassDraftingThin;
