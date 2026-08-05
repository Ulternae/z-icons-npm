import React from 'react';

export interface LanSdCardsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSdCardsRegular(props: LanSdCardsRegularProps): React.ReactElement;
export default LanSdCardsRegular;
