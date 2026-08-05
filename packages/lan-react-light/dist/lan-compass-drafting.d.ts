import React from 'react';

export interface LanCompassDraftingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassDrafting(props: LanCompassDraftingProps): React.ReactElement;
export default LanCompassDrafting;
