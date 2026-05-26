import React from 'react';

export interface LanSoapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSoap: React.FC<LanSoapProps>;
export default LanSoap;
