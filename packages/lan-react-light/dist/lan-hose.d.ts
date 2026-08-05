import React from 'react';

export interface LanHoseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHose(props: LanHoseProps): React.ReactElement;
export default LanHose;
