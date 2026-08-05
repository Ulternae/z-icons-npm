import React from 'react';

export interface LanFaceTiredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceTired(props: LanFaceTiredProps): React.ReactElement;
export default LanFaceTired;
