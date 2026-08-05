import React from 'react';

export interface MinaCornerDownLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerDownLeft(props: MinaCornerDownLeftProps): React.ReactElement;
export default MinaCornerDownLeft;
