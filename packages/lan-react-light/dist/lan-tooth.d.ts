import React from 'react';

export interface LanToothProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTooth(props: LanToothProps): React.ReactElement;
export default LanTooth;
