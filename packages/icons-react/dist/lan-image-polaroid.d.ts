import React from 'react';

export interface LanImagePolaroidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePolaroid: React.FC<LanImagePolaroidProps>;
export default LanImagePolaroid;
