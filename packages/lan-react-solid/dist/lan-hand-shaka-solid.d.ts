import React from 'react';

export interface LanHandShakaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandShakaSolid(props: LanHandShakaSolidProps): React.ReactElement;
export default LanHandShakaSolid;
