import React from 'react';

export interface LanBreadLoafRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadLoafRegular(props: LanBreadLoafRegularProps): React.ReactElement;
export default LanBreadLoafRegular;
