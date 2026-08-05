import React from 'react';

export interface LanSquareCediProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCedi(props: LanSquareCediProps): React.ReactElement;
export default LanSquareCedi;
