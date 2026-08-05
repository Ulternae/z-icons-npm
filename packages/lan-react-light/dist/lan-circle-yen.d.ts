import React from 'react';

export interface LanCircleYenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleYen(props: LanCircleYenProps): React.ReactElement;
export default LanCircleYen;
