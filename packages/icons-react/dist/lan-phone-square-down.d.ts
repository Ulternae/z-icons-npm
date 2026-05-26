import React from 'react';

export interface LanPhoneSquareDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneSquareDown: React.FC<LanPhoneSquareDownProps>;
export default LanPhoneSquareDown;
