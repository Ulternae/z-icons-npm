import React from 'react';

export interface MinaPlayOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlayOctagon(props: MinaPlayOctagonProps): React.ReactElement;
export default MinaPlayOctagon;
