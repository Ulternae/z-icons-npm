import React from 'react';

export interface LanSquareKipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareKip(props: LanSquareKipProps): React.ReactElement;
export default LanSquareKip;
