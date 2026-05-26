import React from 'react';

export interface LanTabletScreenButtonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTabletScreenButton: React.FC<LanTabletScreenButtonProps>;
export default LanTabletScreenButton;
