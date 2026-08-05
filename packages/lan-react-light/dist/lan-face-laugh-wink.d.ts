import React from 'react';

export interface LanFaceLaughWinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaughWink(props: LanFaceLaughWinkProps): React.ReactElement;
export default LanFaceLaughWink;
