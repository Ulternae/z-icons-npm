import React from 'react';

export interface LanInboxFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxFullSolid(props: LanInboxFullSolidProps): React.ReactElement;
export default LanInboxFullSolid;
