import React from 'react';

export interface MinaDiceOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDiceOne(props: MinaDiceOneProps): React.ReactElement;
export default MinaDiceOne;
