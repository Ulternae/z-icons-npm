import React from 'react';

export interface LanBridgeCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeCircleXmark: React.FC<LanBridgeCircleXmarkProps>;
export default LanBridgeCircleXmark;
