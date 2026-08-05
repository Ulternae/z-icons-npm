import React from 'react';

export interface MinaCodeOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeOctagon(props: MinaCodeOctagonProps): React.ReactElement;
export default MinaCodeOctagon;
