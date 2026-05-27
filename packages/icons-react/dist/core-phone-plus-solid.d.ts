import React from 'react';

export interface CorePhonePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePhonePlusSolid: React.FC<CorePhonePlusSolidProps>;
export default CorePhonePlusSolid;
