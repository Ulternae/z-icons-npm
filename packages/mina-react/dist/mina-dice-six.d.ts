import React from 'react';

export interface MinaDiceSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceSix(props: MinaDiceSixProps): React.ReactElement;
export default MinaDiceSix;
