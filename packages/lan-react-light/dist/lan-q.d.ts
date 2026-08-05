import React from 'react';

export interface LanQProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQ(props: LanQProps): React.ReactElement;
export default LanQ;
