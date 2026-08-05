import React from 'react';

export interface LanBahtSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBahtSignThin(props: LanBahtSignThinProps): React.ReactElement;
export default LanBahtSignThin;
