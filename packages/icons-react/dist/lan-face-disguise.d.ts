import React from 'react';

export interface LanFaceDisguiseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDisguise: React.FC<LanFaceDisguiseProps>;
export default LanFaceDisguise;
