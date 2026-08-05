import React from 'react';

export interface LanCompassDraftingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassDraftingThin(props: LanCompassDraftingThinProps): React.ReactElement;
export default LanCompassDraftingThin;
