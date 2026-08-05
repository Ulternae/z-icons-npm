import React from 'react';

export interface LanBlanketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlanket(props: LanBlanketProps): React.ReactElement;
export default LanBlanket;
