import React from 'react';

export interface LanMarsStrokeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMarsStrokeRegular: React.FC<LanMarsStrokeRegularProps>;
export default LanMarsStrokeRegular;
