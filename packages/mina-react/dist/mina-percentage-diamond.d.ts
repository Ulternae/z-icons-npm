import React from 'react';

export interface MinaPercentageDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPercentageDiamond(props: MinaPercentageDiamondProps): React.ReactElement;
export default MinaPercentageDiamond;
