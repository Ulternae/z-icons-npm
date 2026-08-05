import React from 'react';

export interface LanBarnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarn(props: LanBarnProps): React.ReactElement;
export default LanBarn;
