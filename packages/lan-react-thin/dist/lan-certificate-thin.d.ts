import React from 'react';

export interface LanCertificateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCertificateThin(props: LanCertificateThinProps): React.ReactElement;
export default LanCertificateThin;
