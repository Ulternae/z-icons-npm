import React from 'react';

export interface LanFortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFort(props: LanFortProps): React.ReactElement;
export default LanFort;
