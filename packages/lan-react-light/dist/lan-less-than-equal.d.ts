import React from 'react';

export interface LanLessThanEqualProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLessThanEqual(props: LanLessThanEqualProps): React.ReactElement;
export default LanLessThanEqual;
