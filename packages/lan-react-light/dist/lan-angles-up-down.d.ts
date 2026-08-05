import React from 'react';

export interface LanAnglesUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnglesUpDown(props: LanAnglesUpDownProps): React.ReactElement;
export default LanAnglesUpDown;
