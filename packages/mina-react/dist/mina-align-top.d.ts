import React from 'react';

export interface MinaAlignTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignTop(props: MinaAlignTopProps): React.ReactElement;
export default MinaAlignTop;
