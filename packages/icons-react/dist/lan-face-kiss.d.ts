import React from 'react';

export interface LanFaceKissProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceKiss: React.FC<LanFaceKissProps>;
export default LanFaceKiss;
