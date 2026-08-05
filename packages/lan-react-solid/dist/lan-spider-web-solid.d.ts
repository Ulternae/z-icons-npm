import React from 'react';

export interface LanSpiderWebSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpiderWebSolid(props: LanSpiderWebSolidProps): React.ReactElement;
export default LanSpiderWebSolid;
