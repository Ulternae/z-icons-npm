import React from 'react';

export interface LanBahtSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBahtSignSolid(props: LanBahtSignSolidProps): React.ReactElement;
export default LanBahtSignSolid;
