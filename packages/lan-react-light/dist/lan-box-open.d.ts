import React from 'react';

export interface LanBoxOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxOpen(props: LanBoxOpenProps): React.ReactElement;
export default LanBoxOpen;
