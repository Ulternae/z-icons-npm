import React from 'react';

export interface LanKaabaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKaabaSolid(props: LanKaabaSolidProps): React.ReactElement;
export default LanKaabaSolid;
