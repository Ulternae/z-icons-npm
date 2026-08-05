import React from 'react';

export interface LanKayakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKayak(props: LanKayakProps): React.ReactElement;
export default LanKayak;
