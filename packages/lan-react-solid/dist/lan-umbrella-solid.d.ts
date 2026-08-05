import React from 'react';

export interface LanUmbrellaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUmbrellaSolid(props: LanUmbrellaSolidProps): React.ReactElement;
export default LanUmbrellaSolid;
