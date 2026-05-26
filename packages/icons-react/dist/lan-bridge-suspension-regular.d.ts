import React from 'react';

export interface LanBridgeSuspensionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeSuspensionRegular: React.FC<LanBridgeSuspensionRegularProps>;
export default LanBridgeSuspensionRegular;
