import React from 'react';

export interface MinaPlusOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlusOctagon(props: MinaPlusOctagonProps): React.ReactElement;
export default MinaPlusOctagon;
