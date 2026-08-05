import React from 'react';

export interface LanSquareDongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDong(props: LanSquareDongProps): React.ReactElement;
export default LanSquareDong;
