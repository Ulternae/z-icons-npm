import React from 'react';

export interface LanCertificateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCertificateSolid(props: LanCertificateSolidProps): React.ReactElement;
export default LanCertificateSolid;
