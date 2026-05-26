import React from 'react';

export interface LanMobileScreenButtonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileScreenButton: React.FC<LanMobileScreenButtonProps>;
export default LanMobileScreenButton;
