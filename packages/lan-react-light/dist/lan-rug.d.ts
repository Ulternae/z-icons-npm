import React from 'react';

export interface LanRugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRug(props: LanRugProps): React.ReactElement;
export default LanRug;
