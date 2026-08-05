import React from 'react';

export interface LanPretzelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPretzel(props: LanPretzelProps): React.ReactElement;
export default LanPretzel;
