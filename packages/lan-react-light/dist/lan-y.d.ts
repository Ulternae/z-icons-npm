import React from 'react';

export interface LanYProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanY(props: LanYProps): React.ReactElement;
export default LanY;
