import React from 'react';

export interface MinaClickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClick(props: MinaClickProps): React.ReactElement;
export default MinaClick;
