import React from 'react';

export interface LanTableDiningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableDiningSolid(props: LanTableDiningSolidProps): React.ReactElement;
export default LanTableDiningSolid;
