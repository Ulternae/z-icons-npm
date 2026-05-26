import React from 'react';

export interface LanBacteriumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBacteriumRegular: React.FC<LanBacteriumRegularProps>;
export default LanBacteriumRegular;
