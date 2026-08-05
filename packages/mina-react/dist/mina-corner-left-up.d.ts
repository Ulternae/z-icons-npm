import React from 'react';

export interface MinaCornerLeftUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerLeftUp(props: MinaCornerLeftUpProps): React.ReactElement;
export default MinaCornerLeftUp;
