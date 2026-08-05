import React from 'react';

export interface LanSquareKipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKipRegular(props: LanSquareKipRegularProps): React.ReactElement;
export default LanSquareKipRegular;
