import React from 'react';

export interface BruConnectdevelopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruConnectdevelop(props: BruConnectdevelopProps): React.ReactElement;
export default BruConnectdevelop;
