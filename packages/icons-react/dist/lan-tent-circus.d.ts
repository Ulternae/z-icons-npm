import React from 'react';

export interface LanTentCircusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentCircus: React.FC<LanTentCircusProps>;
export default LanTentCircus;
