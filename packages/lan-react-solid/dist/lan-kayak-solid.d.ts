import React from 'react';

export interface LanKayakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKayakSolid(props: LanKayakSolidProps): React.ReactElement;
export default LanKayakSolid;
