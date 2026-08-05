import React from 'react';

export interface LanCertificateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCertificateRegular(props: LanCertificateRegularProps): React.ReactElement;
export default LanCertificateRegular;
