import React from 'react';

export interface MinaMusicDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusicDiamond(props: MinaMusicDiamondProps): React.ReactElement;
export default MinaMusicDiamond;
