import React from 'react';

export interface LanIProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanI(props: LanIProps): React.ReactElement;
export default LanI;
