import React from 'react';

export interface LanFaceWoozyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWoozy: React.FC<LanFaceWoozyProps>;
export default LanFaceWoozy;
