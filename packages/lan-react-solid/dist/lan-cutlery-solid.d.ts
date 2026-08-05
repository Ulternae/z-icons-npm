import React from 'react';

export interface LanCutlerySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCutlerySolid(props: LanCutlerySolidProps): React.ReactElement;
export default LanCutlerySolid;
