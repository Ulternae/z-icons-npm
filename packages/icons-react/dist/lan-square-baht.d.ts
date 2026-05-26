import React from 'react';

export interface LanSquareBahtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBaht: React.FC<LanSquareBahtProps>;
export default LanSquareBaht;
