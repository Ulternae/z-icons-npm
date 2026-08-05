import React from 'react';

export interface LanAwardSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAwardSimple(props: LanAwardSimpleProps): React.ReactElement;
export default LanAwardSimple;
