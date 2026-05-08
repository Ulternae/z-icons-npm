import React from 'react';

export interface MinaMoveVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoveVertical: React.FC<MinaMoveVerticalProps>;
export default MinaMoveVertical;
