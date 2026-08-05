import React from 'react';

export interface LanDoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDove(props: LanDoveProps): React.ReactElement;
export default LanDove;
