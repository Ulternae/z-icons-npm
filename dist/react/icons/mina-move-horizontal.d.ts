import React from 'react';

export interface MinaMoveHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoveHorizontal: React.FC<MinaMoveHorizontalProps>;
export default MinaMoveHorizontal;
