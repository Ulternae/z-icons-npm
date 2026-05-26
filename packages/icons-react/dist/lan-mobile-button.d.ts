import React from 'react';

export interface LanMobileButtonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileButton: React.FC<LanMobileButtonProps>;
export default LanMobileButton;
