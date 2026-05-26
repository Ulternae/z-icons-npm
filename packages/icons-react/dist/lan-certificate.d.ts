import React from 'react';

export interface LanCertificateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCertificate: React.FC<LanCertificateProps>;
export default LanCertificate;
