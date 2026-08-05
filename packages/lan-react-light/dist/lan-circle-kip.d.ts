import React from 'react';

export interface LanCircleKipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleKip(props: LanCircleKipProps): React.ReactElement;
export default LanCircleKip;
