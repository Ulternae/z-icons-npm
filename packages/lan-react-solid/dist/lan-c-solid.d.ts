import React from 'react';

export interface LanCSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCSolid(props: LanCSolidProps): React.ReactElement;
export default LanCSolid;
