import React from 'react';

export interface MinaAlignRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignRight(props: MinaAlignRightProps): React.ReactElement;
export default MinaAlignRight;
