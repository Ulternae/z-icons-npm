import React from 'react';

export interface LanCometProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComet(props: LanCometProps): React.ReactElement;
export default LanComet;
