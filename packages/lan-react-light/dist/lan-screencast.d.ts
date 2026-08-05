import React from 'react';

export interface LanScreencastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScreencast(props: LanScreencastProps): React.ReactElement;
export default LanScreencast;
