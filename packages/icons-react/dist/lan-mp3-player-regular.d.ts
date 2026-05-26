import React from 'react';

export interface LanMp3PlayerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMp3PlayerRegular: React.FC<LanMp3PlayerRegularProps>;
export default LanMp3PlayerRegular;
