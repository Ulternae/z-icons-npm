import React from 'react';

export interface LanDirectionUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDirectionUpDown(props: LanDirectionUpDownProps): React.ReactElement;
export default LanDirectionUpDown;
