import React from 'react';

export interface LanCertificateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCertificateRegular: React.FC<LanCertificateRegularProps>;
export default LanCertificateRegular;
