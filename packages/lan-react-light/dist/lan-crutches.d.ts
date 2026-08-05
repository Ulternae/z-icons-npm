import React from 'react';

export interface LanCrutchesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrutches(props: LanCrutchesProps): React.ReactElement;
export default LanCrutches;
