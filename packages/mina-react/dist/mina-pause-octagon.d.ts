import React from 'react';

export interface MinaPauseOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseOctagon(props: MinaPauseOctagonProps): React.ReactElement;
export default MinaPauseOctagon;
