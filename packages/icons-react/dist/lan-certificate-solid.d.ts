import React from 'react';

export interface LanCertificateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCertificateSolid: React.FC<LanCertificateSolidProps>;
export default LanCertificateSolid;
