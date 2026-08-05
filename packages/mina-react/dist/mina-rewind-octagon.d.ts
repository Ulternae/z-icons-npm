import React from 'react';

export interface MinaRewindOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRewindOctagon(props: MinaRewindOctagonProps): React.ReactElement;
export default MinaRewindOctagon;
