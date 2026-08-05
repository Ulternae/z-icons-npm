import React from 'react';

export interface LanBroccoliProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBroccoli(props: LanBroccoliProps): React.ReactElement;
export default LanBroccoli;
