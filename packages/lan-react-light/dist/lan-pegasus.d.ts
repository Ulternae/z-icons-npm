import React from 'react';

export interface LanPegasusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPegasus(props: LanPegasusProps): React.ReactElement;
export default LanPegasus;
