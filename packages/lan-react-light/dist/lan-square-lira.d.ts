import React from 'react';

export interface LanSquareLiraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLira(props: LanSquareLiraProps): React.ReactElement;
export default LanSquareLira;
