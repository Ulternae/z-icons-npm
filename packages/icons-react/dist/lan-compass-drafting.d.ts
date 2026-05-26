import React from 'react';

export interface LanCompassDraftingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassDrafting: React.FC<LanCompassDraftingProps>;
export default LanCompassDrafting;
