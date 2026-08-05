import React from 'react';

export interface MinaDiceFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceFive(props: MinaDiceFiveProps): React.ReactElement;
export default MinaDiceFive;
