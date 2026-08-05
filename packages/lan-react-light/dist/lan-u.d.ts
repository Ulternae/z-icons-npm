import React from 'react';

export interface LanUProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanU(props: LanUProps): React.ReactElement;
export default LanU;
