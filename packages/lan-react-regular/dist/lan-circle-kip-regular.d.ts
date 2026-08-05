import React from 'react';

export interface LanCircleKipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleKipRegular(props: LanCircleKipRegularProps): React.ReactElement;
export default LanCircleKipRegular;
