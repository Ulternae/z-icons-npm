import React from 'react';

export interface MinaTextAlignCenterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTextAlignCenter: React.FC<MinaTextAlignCenterProps>;
export default MinaTextAlignCenter;
