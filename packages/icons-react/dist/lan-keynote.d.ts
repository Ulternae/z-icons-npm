import React from 'react';

export interface LanKeynoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeynote: React.FC<LanKeynoteProps>;
export default LanKeynote;
