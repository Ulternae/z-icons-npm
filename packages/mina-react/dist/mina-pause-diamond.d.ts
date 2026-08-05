import React from 'react';

export interface MinaPauseDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseDiamond(props: MinaPauseDiamondProps): React.ReactElement;
export default MinaPauseDiamond;
