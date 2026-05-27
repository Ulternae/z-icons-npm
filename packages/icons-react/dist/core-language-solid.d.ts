import React from 'react';

export interface CoreLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLanguageSolid: React.FC<CoreLanguageSolidProps>;
export default CoreLanguageSolid;
