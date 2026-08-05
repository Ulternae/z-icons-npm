import React from 'react';

export interface LanGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanG(props: LanGProps): React.ReactElement;
export default LanG;
