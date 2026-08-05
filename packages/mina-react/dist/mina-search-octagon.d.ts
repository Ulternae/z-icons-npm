import React from 'react';

export interface MinaSearchOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchOctagon(props: MinaSearchOctagonProps): React.ReactElement;
export default MinaSearchOctagon;
