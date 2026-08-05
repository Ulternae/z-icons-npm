import React from 'react';

export interface LanCauldronProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCauldron(props: LanCauldronProps): React.ReactElement;
export default LanCauldron;
