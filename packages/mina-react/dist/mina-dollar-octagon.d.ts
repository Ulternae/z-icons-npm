import React from 'react';

export interface MinaDollarOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDollarOctagon(props: MinaDollarOctagonProps): React.ReactElement;
export default MinaDollarOctagon;
