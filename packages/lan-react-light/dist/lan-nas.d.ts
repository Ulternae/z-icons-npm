import React from 'react';

export interface LanNasProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNas(props: LanNasProps): React.ReactElement;
export default LanNas;
