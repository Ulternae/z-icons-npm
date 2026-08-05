import React from 'react';

export interface MinaUserDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserDiamond(props: MinaUserDiamondProps): React.ReactElement;
export default MinaUserDiamond;
