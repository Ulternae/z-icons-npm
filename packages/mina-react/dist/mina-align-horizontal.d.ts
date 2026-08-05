import React from 'react';

export interface MinaAlignHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignHorizontal(props: MinaAlignHorizontalProps): React.ReactElement;
export default MinaAlignHorizontal;
