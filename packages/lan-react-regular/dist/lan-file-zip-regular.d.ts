import React from 'react';

export interface LanFileZipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileZipRegular(props: LanFileZipRegularProps): React.ReactElement;
export default LanFileZipRegular;
