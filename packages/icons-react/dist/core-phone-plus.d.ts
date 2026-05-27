import React from 'react';

export interface CorePhonePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhonePlus: React.FC<CorePhonePlusProps>;
export default CorePhonePlus;
