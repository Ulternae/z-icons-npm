import React from 'react';

export interface LanSignalStreamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignalStreamSolid(props: LanSignalStreamSolidProps): React.ReactElement;
export default LanSignalStreamSolid;
