import React from 'react';

export interface MinaDangerOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDangerOctagon(props: MinaDangerOctagonProps): React.ReactElement;
export default MinaDangerOctagon;
