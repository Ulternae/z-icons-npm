import React from 'react';

export interface LanArchwayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArchway(props: LanArchwayProps): React.ReactElement;
export default LanArchway;
