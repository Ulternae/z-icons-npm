import React from 'react';

export interface LanGreaterThanEqualProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGreaterThanEqual(props: LanGreaterThanEqualProps): React.ReactElement;
export default LanGreaterThanEqual;
