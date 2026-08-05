import React from 'react';

export interface MinaNineOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNineOctagon(props: MinaNineOctagonProps): React.ReactElement;
export default MinaNineOctagon;
