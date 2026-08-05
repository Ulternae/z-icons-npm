import React from 'react';

export interface LanInboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInboxSolid(props: LanInboxSolidProps): React.ReactElement;
export default LanInboxSolid;
