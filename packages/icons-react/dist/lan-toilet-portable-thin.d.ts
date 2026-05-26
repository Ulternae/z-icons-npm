import React from 'react';

export interface LanToiletPortableThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPortableThin: React.FC<LanToiletPortableThinProps>;
export default LanToiletPortableThin;
