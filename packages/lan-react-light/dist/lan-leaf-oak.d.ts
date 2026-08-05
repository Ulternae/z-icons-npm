import React from 'react';

export interface LanLeafOakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafOak(props: LanLeafOakProps): React.ReactElement;
export default LanLeafOak;
