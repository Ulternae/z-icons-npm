import React from 'react';

export interface MinaThreeOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeOctagon(props: MinaThreeOctagonProps): React.ReactElement;
export default MinaThreeOctagon;
