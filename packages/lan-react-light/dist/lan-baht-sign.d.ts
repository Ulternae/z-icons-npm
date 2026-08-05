import React from 'react';

export interface LanBahtSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBahtSign(props: LanBahtSignProps): React.ReactElement;
export default LanBahtSign;
