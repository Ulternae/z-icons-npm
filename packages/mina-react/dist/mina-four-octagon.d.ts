import React from 'react';

export interface MinaFourOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourOctagon(props: MinaFourOctagonProps): React.ReactElement;
export default MinaFourOctagon;
