import React from 'react';

export interface LanHSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHSquareThin(props: LanHSquareThinProps): React.ReactElement;
export default LanHSquareThin;
