import React from 'react';

export interface LanHatSantaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatSantaThin: React.FC<LanHatSantaThinProps>;
export default LanHatSantaThin;
