import React from 'react';

export interface LanBoomboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoombox(props: LanBoomboxProps): React.ReactElement;
export default LanBoombox;
