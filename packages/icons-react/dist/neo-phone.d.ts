import React from 'react';

export interface NeoPhoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPhone: React.FC<NeoPhoneProps>;
export default NeoPhone;
