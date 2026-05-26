import React from 'react';

export interface LanTabletButtonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletButton: React.FC<LanTabletButtonProps>;
export default LanTabletButton;
