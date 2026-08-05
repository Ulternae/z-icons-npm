import React from 'react';

export interface MinaSignalDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSignalDiamond(props: MinaSignalDiamondProps): React.ReactElement;
export default MinaSignalDiamond;
