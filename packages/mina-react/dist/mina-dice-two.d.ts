import React from 'react';

export interface MinaDiceTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceTwo(props: MinaDiceTwoProps): React.ReactElement;
export default MinaDiceTwo;
