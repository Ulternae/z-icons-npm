import React from 'react';

export interface LanAngle90Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngle90(props: LanAngle90Props): React.ReactElement;
export default LanAngle90;
