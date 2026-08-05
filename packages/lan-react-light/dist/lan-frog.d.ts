import React from 'react';

export interface LanFrogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrog(props: LanFrogProps): React.ReactElement;
export default LanFrog;
