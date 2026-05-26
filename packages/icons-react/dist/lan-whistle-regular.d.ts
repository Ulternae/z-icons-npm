import React from 'react';

export interface LanWhistleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhistleRegular: React.FC<LanWhistleRegularProps>;
export default LanWhistleRegular;
