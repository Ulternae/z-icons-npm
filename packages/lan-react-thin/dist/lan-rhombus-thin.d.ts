import React from 'react';

export interface LanRhombusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRhombusThin(props: LanRhombusThinProps): React.ReactElement;
export default LanRhombusThin;
