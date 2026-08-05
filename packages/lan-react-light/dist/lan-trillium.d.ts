import React from 'react';

export interface LanTrilliumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrillium(props: LanTrilliumProps): React.ReactElement;
export default LanTrillium;
