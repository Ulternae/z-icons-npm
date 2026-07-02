import React from 'react';

export interface CoreDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDiamond(props: CoreDiamondProps): React.ReactElement;
export default CoreDiamond;
