import React from 'react';

export interface LanShirtTankTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtTankTop: React.FC<LanShirtTankTopProps>;
export default LanShirtTankTop;
