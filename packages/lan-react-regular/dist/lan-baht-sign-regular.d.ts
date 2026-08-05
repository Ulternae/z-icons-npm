import React from 'react';

export interface LanBahtSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBahtSignRegular(props: LanBahtSignRegularProps): React.ReactElement;
export default LanBahtSignRegular;
