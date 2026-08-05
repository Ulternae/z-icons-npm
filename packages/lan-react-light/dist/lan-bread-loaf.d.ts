import React from 'react';

export interface LanBreadLoafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadLoaf(props: LanBreadLoafProps): React.ReactElement;
export default LanBreadLoaf;
