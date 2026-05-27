import React from 'react';

export interface CorePhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhoneSolid: React.FC<CorePhoneSolidProps>;
export default CorePhoneSolid;
