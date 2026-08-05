import React from 'react';

export interface LanMicrochipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrochipRegular(props: LanMicrochipRegularProps): React.ReactElement;
export default LanMicrochipRegular;
