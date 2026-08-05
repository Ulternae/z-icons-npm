import React from 'react';

export interface LanDresserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDresser(props: LanDresserProps): React.ReactElement;
export default LanDresser;
