import React from 'react';

export interface MinaAlignLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignLeft(props: MinaAlignLeftProps): React.ReactElement;
export default MinaAlignLeft;
