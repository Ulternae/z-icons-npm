import React from 'react';

export interface LanGrid2PlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2Plus(props: LanGrid2PlusProps): React.ReactElement;
export default LanGrid2Plus;
