import React from 'react';

export interface LanListTimelineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListTimelineSolid(props: LanListTimelineSolidProps): React.ReactElement;
export default LanListTimelineSolid;
