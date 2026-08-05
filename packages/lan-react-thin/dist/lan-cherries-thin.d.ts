import React from 'react';

export interface LanCherriesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCherriesThin(props: LanCherriesThinProps): React.ReactElement;
export default LanCherriesThin;
