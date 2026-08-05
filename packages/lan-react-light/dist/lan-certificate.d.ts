import React from 'react';

export interface LanCertificateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCertificate(props: LanCertificateProps): React.ReactElement;
export default LanCertificate;
