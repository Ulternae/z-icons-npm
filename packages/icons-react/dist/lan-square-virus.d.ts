import React from 'react';

export interface LanSquareVirusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareVirus: React.FC<LanSquareVirusProps>;
export default LanSquareVirus;
