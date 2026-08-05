import React from 'react';

export interface LanSquareCentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCent(props: LanSquareCentProps): React.ReactElement;
export default LanSquareCent;
