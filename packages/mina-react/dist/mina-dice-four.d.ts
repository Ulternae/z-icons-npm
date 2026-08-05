import React from 'react';

export interface MinaDiceFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceFour(props: MinaDiceFourProps): React.ReactElement;
export default MinaDiceFour;
