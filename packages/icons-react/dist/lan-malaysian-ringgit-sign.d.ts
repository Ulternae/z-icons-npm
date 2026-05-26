import React from 'react';

export interface LanMalaysianRinggitSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMalaysianRinggitSign: React.FC<LanMalaysianRinggitSignProps>;
export default LanMalaysianRinggitSign;
