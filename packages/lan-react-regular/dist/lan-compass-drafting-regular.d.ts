import React from 'react';

export interface LanCompassDraftingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompassDraftingRegular(props: LanCompassDraftingRegularProps): React.ReactElement;
export default LanCompassDraftingRegular;
