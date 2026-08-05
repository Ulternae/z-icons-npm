import React from 'react';

export interface MinaForwardOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaForwardOctagon(props: MinaForwardOctagonProps): React.ReactElement;
export default MinaForwardOctagon;
