import React from 'react';

export interface LanCruzeiroSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCruzeiroSignThin: React.FC<LanCruzeiroSignThinProps>;
export default LanCruzeiroSignThin;
