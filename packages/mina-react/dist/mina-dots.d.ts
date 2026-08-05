import React from 'react';

export interface MinaDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDots(props: MinaDotsProps): React.ReactElement;
export default MinaDots;
