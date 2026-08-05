import React from 'react';

export interface MinaMoveHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMoveHorizontal(props: MinaMoveHorizontalProps): React.ReactElement;
export default MinaMoveHorizontal;
