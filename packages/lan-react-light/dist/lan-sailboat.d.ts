import React from 'react';

export interface LanSailboatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSailboat(props: LanSailboatProps): React.ReactElement;
export default LanSailboat;
