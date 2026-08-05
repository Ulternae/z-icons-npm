import React from 'react';

export interface MinaDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollar(props: MinaDollarProps): React.ReactElement;
export default MinaDollar;
