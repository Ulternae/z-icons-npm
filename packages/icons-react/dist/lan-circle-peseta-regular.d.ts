import React from 'react';

export interface LanCirclePesetaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePesetaRegular: React.FC<LanCirclePesetaRegularProps>;
export default LanCirclePesetaRegular;
