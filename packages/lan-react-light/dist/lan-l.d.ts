import React from 'react';

export interface LanLProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanL(props: LanLProps): React.ReactElement;
export default LanL;
