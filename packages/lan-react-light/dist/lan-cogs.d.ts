import React from 'react';

export interface LanCogsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCogs(props: LanCogsProps): React.ReactElement;
export default LanCogs;
