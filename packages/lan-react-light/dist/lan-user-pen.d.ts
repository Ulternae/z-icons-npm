import React from 'react';

export interface LanUserPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPen(props: LanUserPenProps): React.ReactElement;
export default LanUserPen;
