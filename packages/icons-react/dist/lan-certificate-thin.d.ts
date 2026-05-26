import React from 'react';

export interface LanCertificateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCertificateThin: React.FC<LanCertificateThinProps>;
export default LanCertificateThin;
