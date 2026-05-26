import React from 'react';

export interface LanCruzeiroSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCruzeiroSign: React.FC<LanCruzeiroSignProps>;
export default LanCruzeiroSign;
