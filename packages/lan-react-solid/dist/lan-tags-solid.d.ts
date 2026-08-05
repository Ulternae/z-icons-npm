import React from 'react';

export interface LanTagsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTagsSolid(props: LanTagsSolidProps): React.ReactElement;
export default LanTagsSolid;
