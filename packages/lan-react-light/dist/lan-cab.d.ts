import React from 'react';

export interface LanCabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCab(props: LanCabProps): React.ReactElement;
export default LanCab;
