import React from 'react';

export interface MinaYenOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenOctagon(props: MinaYenOctagonProps): React.ReactElement;
export default MinaYenOctagon;
