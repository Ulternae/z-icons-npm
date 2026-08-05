import React from 'react';

export interface LanCrutchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrutch(props: LanCrutchProps): React.ReactElement;
export default LanCrutch;
