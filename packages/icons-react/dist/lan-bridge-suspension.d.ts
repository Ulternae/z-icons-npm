import React from 'react';

export interface LanBridgeSuspensionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeSuspension: React.FC<LanBridgeSuspensionProps>;
export default LanBridgeSuspension;
