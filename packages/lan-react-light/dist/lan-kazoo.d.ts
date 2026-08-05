import React from 'react';

export interface LanKazooProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKazoo(props: LanKazooProps): React.ReactElement;
export default LanKazoo;
