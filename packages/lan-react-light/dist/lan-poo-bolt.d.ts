import React from 'react';

export interface LanPooBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPooBolt(props: LanPooBoltProps): React.ReactElement;
export default LanPooBolt;
