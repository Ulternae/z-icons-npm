import React from 'react';

export interface LanPlayFlipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayFlipRegular(props: LanPlayFlipRegularProps): React.ReactElement;
export default LanPlayFlipRegular;
