import React from 'react';

export interface MinaHeartDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartDiamond(props: MinaHeartDiamondProps): React.ReactElement;
export default MinaHeartDiamond;
