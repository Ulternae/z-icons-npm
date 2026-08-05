import React from 'react';

export interface LanBahaiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBahai(props: LanBahaiProps): React.ReactElement;
export default LanBahai;
