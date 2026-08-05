import React from 'react';

export interface LanSquareHryvniaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHryvnia(props: LanSquareHryvniaProps): React.ReactElement;
export default LanSquareHryvnia;
