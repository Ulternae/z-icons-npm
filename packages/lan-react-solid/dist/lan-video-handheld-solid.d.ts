import React from 'react';

export interface LanVideoHandheldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoHandheldSolid(props: LanVideoHandheldSolidProps): React.ReactElement;
export default LanVideoHandheldSolid;
