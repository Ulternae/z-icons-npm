import React from 'react';

export interface CorePhoneXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhoneXmark: React.FC<CorePhoneXmarkProps>;
export default CorePhoneXmark;
