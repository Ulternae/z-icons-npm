import React from 'react';

export interface LanBusinessTimeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBusinessTime(props: LanBusinessTimeProps): React.ReactElement;
export default LanBusinessTime;
