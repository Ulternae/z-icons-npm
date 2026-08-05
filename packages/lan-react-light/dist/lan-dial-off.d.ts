import React from 'react';

export interface LanDialOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialOff(props: LanDialOffProps): React.ReactElement;
export default LanDialOff;
