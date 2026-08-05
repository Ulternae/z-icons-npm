import React from 'react';

export interface MinaCornerLeftDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerLeftDown(props: MinaCornerLeftDownProps): React.ReactElement;
export default MinaCornerLeftDown;
