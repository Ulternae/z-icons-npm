import React from 'react';

export interface LanBootHeeledSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBootHeeledSolid(props: LanBootHeeledSolidProps): React.ReactElement;
export default LanBootHeeledSolid;
