import React from 'react';

export interface MinaRupeeDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeDiamond(props: MinaRupeeDiamondProps): React.ReactElement;
export default MinaRupeeDiamond;
