import React from 'react';

export interface LanMarsStrokeVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeVRegular: React.FC<LanMarsStrokeVRegularProps>;
export default LanMarsStrokeVRegular;
