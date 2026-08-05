import React from 'react';

export interface LanToolboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToolboxSolid(props: LanToolboxSolidProps): React.ReactElement;
export default LanToolboxSolid;
