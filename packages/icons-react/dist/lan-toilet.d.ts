import React from 'react';

export interface LanToiletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToilet: React.FC<LanToiletProps>;
export default LanToilet;
