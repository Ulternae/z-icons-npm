import React from 'react';

export interface LanVenusDoubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVenusDoubleThin: React.FC<LanVenusDoubleThinProps>;
export default LanVenusDoubleThin;
