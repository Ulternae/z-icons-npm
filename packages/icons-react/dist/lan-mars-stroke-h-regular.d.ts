import React from 'react';

export interface LanMarsStrokeHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeHRegular: React.FC<LanMarsStrokeHRegularProps>;
export default LanMarsStrokeHRegular;
