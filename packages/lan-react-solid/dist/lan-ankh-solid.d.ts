import React from 'react';

export interface LanAnkhSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnkhSolid(props: LanAnkhSolidProps): React.ReactElement;
export default LanAnkhSolid;
