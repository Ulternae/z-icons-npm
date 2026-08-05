import React from 'react';

export interface LanShoePrintsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShoePrintsThin(props: LanShoePrintsThinProps): React.ReactElement;
export default LanShoePrintsThin;
