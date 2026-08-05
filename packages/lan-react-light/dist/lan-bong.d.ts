import React from 'react';

export interface LanBongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBong(props: LanBongProps): React.ReactElement;
export default LanBong;
