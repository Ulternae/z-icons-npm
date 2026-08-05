import React from 'react';

export interface MinaAlignBottomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignBottom(props: MinaAlignBottomProps): React.ReactElement;
export default MinaAlignBottom;
